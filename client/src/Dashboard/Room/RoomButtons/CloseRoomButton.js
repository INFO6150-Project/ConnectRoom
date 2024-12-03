import React from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import * as roomHander from '../../../realtimeCommunication/roomHandler';

const CloseRoomButton = () => {
    const handleLeaveRoom = () => {
        roomHander.leaveRoom();
    };

    return (
        <IconButton onClick={handleLeaveRoom} style={{color: 'white'}}>
            <CloseIcon />
        </IconButton>
    );
};

export default CloseRoomButton;
