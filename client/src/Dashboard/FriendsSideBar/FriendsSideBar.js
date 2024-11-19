import React from 'react';
import { style, styled } from '@mui/system';
import AddFriendButton from './AddFriendButton';
import FriendsTitle from './FriendsTitle';
import FriendsList from './FriendsList/FriendsList';
import PendingInvitationsList from './PendingInvitationsList/PendingInvitationsLists';

const MainContainer = styled('div')({
    width: '224px',
    height: '100%',
    display: 'flex',
    flexDirection: "column",
    background: '#2F3136',
    alignItems: 'center'
});

const FriendsSideBar = () =>{
    return <MainContainer>
        <AddFriendButton/>
        <FriendsTitle title = 'Private Messages' />
        <FriendsList />
        <FriendsTitle title = 'Invitation' />
        <PendingInvitationsList />
    </MainContainer>;
};

export default FriendsSideBar;