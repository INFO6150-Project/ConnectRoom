# Connect Room

Connect Room is a web application designed for users from Northeastern University to connect, chat, and engage in video calls with screen sharing functionality. Built with React for the frontend and Node.js for the backend, the app allows users to sign up, chat in real-time, and initiate peer-to-peer video calls using WebRTC.

## Features

- **User Signup & Authentication**: Users can sign up and authenticate to access the platform.
- **Real-time Chat**: Instant messaging with live online connectivity using Socket.io.
- **Video Calling**: Peer-to-peer video calling with screen sharing capabilities using WebRTC.
- **User Profiles**: Customizable profiles for each user.
- **Room Creation**: Users can create and join video rooms for group or one-on-one calls.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Real-time Communication**: Socket.io for chat functionality
- **Video Communication**: WebRTC for peer-to-peer video calling and screen sharing
- **Database**: (Add your database here if applicable)

## Project Structure

```
├── client/                # React frontend
│   ├── src/               # Source code for the frontend
│   ├── public/            # Public assets and static files
│   └── package.json       # Frontend dependencies and scripts
├── server/                # Node.js backend
│   ├── src/               # Source code for the backend
│   ├── controllers/       # API route controllers
│   ├── models/            # Database models (if applicable)
│   └── package.json       # Backend dependencies and scripts
├── .gitignore             # Git ignore configuration
└── README.md              # Project README
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/connect-room.git
cd connect-room
```

### 2. Install Dependencies

#### For the Backend

Navigate to the `server` folder and install the required dependencies:

```bash
cd server
npm install
```

#### For the Frontend

Navigate to the `client` folder and install the required dependencies:

```bash
cd client
npm install
```

### 3. Configure the Backend

Ensure the backend is set up to handle Socket.io connections and WebRTC signaling. If you need any specific environment variables, create a `.env` file in the `server/` directory and add them.

### 4. Run the Application

#### Start the Backend Server

In the `server/` directory, run:

```bash
npm start
```

#### Start the Frontend React App

In the `client/` directory, run:

```bash
npm start
```

Visit `http://localhost:3000` in your browser to access the application.

## Usage

1. **Sign up** as a new user with your Northeastern University email.
2. **Chat** with other users in real-time via the chat feature.
3. **Create or Join a Video Room** for peer-to-peer video calls.
4. **Share your screen** during a video call to collaborate effectively.

## Dependencies

- **Socket.io**: Used for real-time chat functionality and maintaining online connectivity between users.
- **WebRTC**: Enables peer-to-peer video calling and screen sharing.
- **React**: Frontend framework for building the user interface.
- **Node.js/Express**: Backend framework to handle server-side logic and communication.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request for any bug fixes, features, or improvements.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Socket.io** and **WebRTC** for enabling real-time communication and video calling functionality.
- The **Northeastern University community** for their continued support in making this project a success.

