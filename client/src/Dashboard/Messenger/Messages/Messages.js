import React, {userRef, useEffect} from 'react';
import { styled } from '@mui/system';
import MessagesHeader from './MessagesHeader';
import { connect } from 'react-redux';
// import DUMMY_MESSAGES from './DUMMY_MESSAGES';
import Message from './Message';

const DUMMY_MESSAGES = [
    {
      _id: 1,
      content: "hello",
      sameAuthor: "false",
      author: {
        username: "Marek",
      },
      date: "22/01/2022",
      sameDay: false,
    },
    {
      _id: 2,
      content: "hello once again",
      sameAuthor: "true",
      author: {
        username: "Marek",
      },
      date: "22/01/2022",
      sameDay: true,
    },
    {
      _id: 3,
      content: "hello third time",
      sameAuthor: "true",
      author: {
        username: "Marek",
      },
      date: "23/01/2022",
      sameDay: false,
    },
    {
      _id: 4,
      content: "hello response first time",
      sameAuthor: false,
      author: {
        username: "John",
      },
      date: "23/01/2022",
      sameDay: true,
    },
    {
      _id: 5,
      content: "hello response third time",
      sameAuthor: true,
      author: {
        username: "John",
      },
      date: "24/01/2022",
      sameDay: false,
    },
  ];

const MainContainer = styled('div')({
    height: 'calc(100% - 60px)',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const Messages = ({chosenChatDetails, messages}) => {
    console.log('MESSAGES: ');
    console.log(DUMMY_MESSAGES);
    return (
        <MainContainer>
            <MessagesHeader name={chosenChatDetails?.name} />
            {DUMMY_MESSAGES.map((message,index) => {
                return <Message
                key = {message._id}
                content = {message.content}
                username = {message.author.username}
                sameAuthor={message.sameAuthor}
                date = {message.date}
                sameDay = {message.sameDay}
                />
            })}
        </MainContainer>
    );
};

const mapStoreStateToProps = ({chat}) => {
    return {
        ...chat,
    };
};

export default connect(mapStoreStateToProps)(Messages);