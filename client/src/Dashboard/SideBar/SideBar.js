import React from 'react';
import { style, styled } from '@mui/system';
import MainPageButton from './MainPageButton';
import CreateRoomButton from './CreateRoomButton';

const MainContainer = styled('div')({
    width: '72px',
    height: '100%',
    display: 'block',
    felxDirection: "column",
    background: '#202225',
    alignItems: 'center'
});

const SideBar = () =>{
    return <MainContainer>
        <MainPageButton/>
        <CreateRoomButton />
    </MainContainer>
}

export default SideBar;