import io from 'socket.io-client';
import { setPendingFriendsInvitations, setFriends, setOnlineUsers } from '../store/actions/friendsActions';
import store from '../store/store';

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
        console.log('direct chat history came from server');
        console.log(data);
    
  })
};

export const sendDirectMessage = (data) => {
    console.log(data);
    socket.emit('direct-message', data);
};

export const getDirectChatHistory = ( data ) => {
    socket.emit('direct-chat-history', data);
}
