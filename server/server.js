//Packages
const express = require('express');
const http = require('http');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const socketServer = require('./socketServer');

//Custom packages
const authRoutes = require('./routes/authRoutes');
const friendInvitationRoutes = require('./routes/friendInvitationRoutes');

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

//Register routes
app.use('/api/auth', authRoutes);
app.use('/api/friend-invitation', friendInvitationRoutes);

const server = http.createServer(app);
socketServer.registerSocketServer(server);

//Connect to database and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
     server.listen(PORT, () =>{
         console.log(`Server is listening on ${PORT}`);
     });
   })
  .catch(error =>{
      console.log('Database connection failed, server not started');
      console.log(error);
  });
