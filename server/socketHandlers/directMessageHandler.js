const Message = require('../models/message');
const Conversation = require('../models/conversation');
const chatUpdates = require('./updates/chat');

const directMessageHandler = async(socket, data) => {
    try {   
        console.log('direct message event is being handled');
        const {userId} = socket.user;
        console.log("data " + data);


        const {receiverUserId, content} = data;
        console.log("Reciever Id: " + receiverUserId);
        console.log("User Id: " + userId);

        // create new message

        const message = await Message.create({
            content: content, 
            author: userId,
            date: new Date(),
            type: 'DIRECT',
        });

        //find if conversation exists with this two users - if not create new
        const conversation = await Conversation.findOne({
            participants: { $all: [userId, receiverUserId]},
        });
        console.log(`conversations: ${conversation}`)
        if(conversation) {
            conversation.messages.push(message._id);
            await conversation.save();

            // perform an update to sender and reciever if is online
            chatUpdates.updateChatHistory(conversation._id.toString());

        } else {
            // create new conversation if not exists
            const newConversation = await Conversation.create({
                messages: [message._id],
                participants: [userId, receiverUserId],
            });

            // perform an update to sender and reciever if is online
            chatUpdates.updateChatHistory(newConversation._id.toString());
        }



    } catch (err) {
        console.log(err);
    }
};

module.exports = directMessageHandler;