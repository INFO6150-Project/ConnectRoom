import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import * as roomHandler from "../../realTimeCommunication/roomHandler";

const CreateRoomButton = ({ isUserInRoom }) => {
  const createNewRoomHandler = () => {
    roomHandler.createNewRoom();
  };

  return (
    <Button
      disabled={isUserInRoom}
      onClick={createNewRoomHandler}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "white",
        backgroundColor: "#0A84FF",
      }}
    >
      <AddIcon />
    </Button>
  );
};

export default CreateRoomButton;
