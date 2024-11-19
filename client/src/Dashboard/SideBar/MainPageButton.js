import React from 'react';
import Buttons from '@mui/material/Button';
import GroupIcon from '@mui/icons-material/Groups';
import { borderRadius, height, minWidth } from '@mui/system';

const MainPageButton = ()=>{
    return(
        <Buttons
        style = {{
            width: '48px',
            height: '48px',
            borderRadius: '16px',
            margin: 0,
            padding: 0,
            minWidth: 0,
            marginTop: '10px',
            color: 'white',
            backgroundColor: '#5865F2'
        }}
        >
            <GroupIcon></GroupIcon>
        </Buttons>
    )
}

export default MainPageButton;