import io from 'socket.io-client';
import { setPendingFriendsInvitations } from '../store/actions/friendsActions';
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
}