import { Button, Tooltip } from '@mui/material';
import Avatar from '../../shared/components/Avatar';
import * as roomHandler from '../../realtimeCommunication/roomHandler';
import React from 'react';

const ActiveRoomButton = ({
    creatorUsername,
    roomId,
    amountOfParticipants,
    isUserInRoom,
}) => {

    const handleJoinActiveRoom = () => {
        if(amountOfParticipants < 4) {
            roomHandler.joinRoom(roomId);
        }
    }

    const activeRoomButtonDisabled = amountOfParticipants > 3;
    const roomTitle = `Creator: ${creatorUsername}. Connected: ${amountOfParticipants}`


    return (
        <Tooltip title={roomTitle}>
            <div>
                <Button
                style = {{
                    width: '48px',
                    height: '48px',
                    borderRadius: '16px',
                    margin: 0,
                    padding: 0,
                    minWidth: 0,
                    marginTop: '10px',
                    color: 'white',
                    backgroundColor: '#5865F2',
                }}
                disabled={activeRoomButtonDisabled || isUserInRoom}
                onClick={handleJoinActiveRoom}
                >
                    <Avatar username={creatorUsername}/>
                </Button>   
            </div>
        </Tooltip>
    );
};

export default ActiveRoomButton;