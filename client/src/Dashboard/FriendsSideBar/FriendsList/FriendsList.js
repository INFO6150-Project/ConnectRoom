import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "../FriendsList/FriendsListItem";


const DUMMY_FRIENDS = [
    {
       id: 1,
       username: 'Rithwik',
       isOnline: true 
    },
    {
        id: 2,
        username: 'Mark',
        isOnline: true 
    },
    {
        id: 3,
        username: 'Saransh',
        isOnline: false 
    },
    {
        id: 4,
        username: 'Geek',
        isOnline: false 
    }
];

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%'
});


const FriendsList = ()=>{
    return (
        <MainContainer>
            {DUMMY_FRIENDS.map((f) =>(
                <FriendsListItem
                username = {f.username}
                id = {f.id}
                key = {f.id} 
                isOnline = {f.isOnline}
                />
            ))}

        </MainContainer>
    );
}

export default FriendsList;