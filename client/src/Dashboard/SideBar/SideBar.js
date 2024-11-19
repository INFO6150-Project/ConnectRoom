import React from 'react';
import { style, styled } from '@mui/system';
import MainPageButton from './MainPageButton';

const MainContainer = styled('div')({
    width: '72px',
    height: '100%',
    display: 'flex',
    felxDirection: "column",
    background: '#202225'
});

const SideBar = () =>{
    return <MainContainer>
        <MainPageButton/>
    </MainContainer>
}

export default SideBar;