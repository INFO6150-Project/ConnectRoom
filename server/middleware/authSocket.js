const jwt = require('jsonwebtoken');

const config = process.env;

const verifyTokenSocket = (socket, next) => {
    let token = socket.handshake.auth?.token;
    token = token.replace(/^Bearer\s+/, "");
    try {
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        console.log(decoded);
        socket.user = decoded;
    } catch (err) {
        const socketError = new Error('NOT_AUTHORIZED');
        console.log(socketError);
        return next(socketError);
    }

    next();
}

module.exports = verifyTokenSocket;