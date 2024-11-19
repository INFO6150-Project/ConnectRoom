import io from 'socket.io-client';

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
}