const User = require('../../models/user');
const FriendInvitation = require('../../models/friendInvitation');
const serverStore = require('../../serverStore');
const user = require('../../models/user');

const updateFriendsPendingInvitations = async(userId) => {
    try{
        const pendingInvitations = await FriendInvitation.find({
            receiverId: userId
        }).populate('senderId', '_id username mail');

        //Find all active connections for specific userId
        const recieverList = serverStore.getActiveConnnections(userId);

        const io = serverStore.getSocketServerInstance();

        recieverList.forEach(recieverSocketId =>{
            io.to(recieverSocketId).emit('friends-invitation', {
                pendingInvitations : pendingInvitations ? pendingInvitations : [],
            });
        });

    }
    catch(err){
        console.log(err);
        
    }
}

module.exports = {
    updateFriendsPendingInvitations,
};