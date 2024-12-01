import io from 'socket.io-client';
import { setPendingFriendsInvitations, setFriends, setOnlineUsers } from '../store/actions/friendsActions';
import store from '../store/store';
import { updateDirectChatHistoryIfActive } from '../shared/utils/chat'
import { newRoomCreated, updateActiveRooms } from './roomHandler';

let socket = null;

export const connectWithSocketServer = (userDetails) => {

    const jwtToken = userDetails.token;
    console.log(jwtToken);
    socket = io('http://localhost:5002', {
        auth: {
            token: jwtToken,
        }
    });

    socket.on('connect', () => {
        console.log('successfully connected to socket io server.');
        console.log(socket.id);
    });

    socket.on('friends-invitation', (data) =>{
        const { pendingInvitations } = data;
        console.log('friends invitation event came');
        console.log(pendingInvitations);
        

        store.dispatch(setPendingFriendsInvitations(pendingInvitations));
    });

    socket.on("friends-list", (data) => {
        const { friends } = data;
        store.dispatch(setFriends(friends));
      });

    socket.on("online-users", (data) => {
        const { onlineUsers } = data;
        store.dispatch(setOnlineUsers(onlineUsers));
    });

    socket.on('direct-chat-history', (data) => {
        updateDirectChatHistoryIfActive(data);
    
    });

    socket.on('room-create', (data) => {
        newRoomCreated(data);
    });

    socket.on('active-rooms', data => {
        updateActiveRooms(data);
    })
};

export const sendDirectMessage = (data) => {
    console.log(data);
    socket.emit('direct-message', data);
};

export const getDirectChatHistory = ( data ) => {
    socket.emit('direct-chat-history', data);
}

export const createNewRoom = () => {
    socket.emit('room-create');
}