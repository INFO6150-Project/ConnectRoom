const mongoose = require("mongoose");
const FriendInvitation = require("../../models/friendInvitation");
const User = require("../../models/user");
const friendsUpdates = require("../../socketHandlers/updates/friends");

const postAccept = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { id } = req.body;
    console.log("Accepting friend invitation with ID:", id);

    // Fetch the friend invitation
    const invitation = await FriendInvitation.findById(id).session(session);
    if (!invitation) {
      console.error("Invitation not found for ID:", id);
      await session.abortTransaction();
      return res.status(401).send("Error occurred. Please try again");
    }

    const { senderId, receiverId } = invitation;

    // Fetch sender user and initialize friends array if undefined
    const senderUser = await User.findById(senderId).session(session);
    if (!senderUser) {
      console.error("Sender user not found with ID:", senderId);
      await session.abortTransaction();
      return res.status(404).send("Sender user not found");
    }
    senderUser.friends = senderUser.friends || [];
    senderUser.friends.push(receiverId);

    // Fetch receiver user and initialize friends array if undefined
    const receiverUser = await User.findById(receiverId).session(session);
    if (!receiverUser) {
      console.error("Receiver user not found with ID:", receiverId);
      await session.abortTransaction();
      return res.status(404).send("Receiver user not found");
    }
    receiverUser.friends = receiverUser.friends || [];
    receiverUser.friends.push(senderId);

    // Save both users
    await senderUser.save({ session });
    await receiverUser.save({ session });

    // Delete the friend invitation
    console.log("Deleting invitation with ID:", id);
    await FriendInvitation.findByIdAndDelete(id).session(session);

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    // Update friends list for both users
    try {
      friendsUpdates.updateFriends(senderId.toString());
      friendsUpdates.updateFriends(receiverId.toString());
    } catch (err) {
      console.error("Error updating friends list:", err);
    }

    // Update pending invitations for receiver
    try {
      friendsUpdates.updateFriendsPendingInvitations(receiverId.toString());
    } catch (err) {
      console.error("Error updating pending invitations:", err);
    }

    console.log("Friend invitation successfully accepted");
    return res.status(200).send("Friend successfully added");
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error in accepting friend invitation:", err);
    return res.status(500).send("Something went wrong. Please try again");
  }
};

module.exports = postAccept;
