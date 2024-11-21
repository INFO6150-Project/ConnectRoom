const friendInvitation = require("../../models/friendInvitation");
const user = require("../../models/user");

const postInvite = async (req, res) => {
    const { targetMailAddress } = req.body;

    const {userId, mail} = req.user;

    // check of friend that we would like to invite is not user

    if(mail.toLowerCase() === targetMailAddress.toLowerCase()) {
        return res.status(409).send('Sorry. You cannot become friend with yourself.');
    }

    const targetUser = await user.findOne({
        mail: targetMailAddress.toLowerCase(),
    });

    if(!targetUser) {
        return res.status(404).send(`${targetMailAddress} has not been found as a registered user. Please check mail address.`);
    }

    //check if invitation has been already sent.
    const invitationAlreadyRecieved = await friendInvitation.findOne({
        senderId: userId,
        receiverId: targetUser.id
    });

    if(invitationAlreadyRecieved) {
        return res.status(409).send('Invitation has been already sent.');
    }

    // check if the user which we would like to invite is already our friend.

    const usersAlreadyFriends = targetUser.friends.find(friendId => 
        friendId.toString() === userId.toString()
    );

    if(usersAlreadyFriends) {
        return res.status(409).send('Friend already added. Please check friend list.')
    }

    //create new invitation in database

    const newInvitation = await friendInvitation.create({
        senderId: userId,
        receiverId: targetUser.id,
    });

    //if invitation has been successfully created we would like to update
    // friends invitaitons if it's online.

    return res.status(201).send('Invitation has been sent.');
};

module.exports = postInvite;
