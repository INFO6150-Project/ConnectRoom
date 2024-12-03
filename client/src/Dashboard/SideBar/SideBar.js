import React from 'react';
import { style, styled } from '@mui/system';
import MainPageButton from './MainPageButton';
import CreateRoomButton from './CreateRoomButton';
import { connect } from 'react-redux';
import ActiveRoomButton from './ActiveRoomButton';

const MainContainer = styled('div')({
    width: '72px',
    height: '100%',
    display: 'block',
    felxDirection: "column",
    background: '#202225',
    alignItems: 'center'
});

const SideBar = ({activeRooms, isUserInRoom}) =>{
    return <MainContainer>
        <MainPageButton/>
        <CreateRoomButton />
        {activeRooms.map(room => (
            <ActiveRoomButton 
            roomId={room.roomId}
            creatorUsername= {room.creatorUsername}
            amountOfParticipants = {room.participants.length}
            key={room.roomId}
            isUserInRoom = {isUserInRoom}
            />
        ))}
    </MainContainer>
}


const mapStoreStateToProps = ({room}) => {
    return {
        ...room,
    };
};

export default connect(mapStoreStateToProps)(SideBar);