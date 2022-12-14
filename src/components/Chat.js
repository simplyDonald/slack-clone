import React from 'react'
import styled from "styled-components"
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { useDocument, useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';

function Chat() {

  const roomId = useSelector(selectRoomId)
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  const [roomMessages] =useCollection(
    roomId && 
    db.collection("rooms").
    doc(roomId)
    .collection("messages")
    .orderBy("timestamp", "asc")
  );

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4><strong>#{roomDetails?.data().name} </strong></h4>
            <StarOutlineIcon /> 

          </HeaderLeft>
          <HeaderRight>
            <p>
            <InfoOutlinedIcon />Details
              
            </p>
          </HeaderRight>
        </Header>

        <ChatMessages>
          {/* List of messages */}
          {roomMessages?.docs.map(doc => (
            <Message 
              key={doc.id}
              message={doc.data()}
              timestamp={doc.data().timestamp}
              user={doc.data().user}
              userImage={doc.data().userImage}
            />
          ))}
        </ChatMessages>

        <ChatInput channelName={roomDetails?.data().name} channelId = {roomId}/>
          {/* Chat input */}
        
      </>
    </ChatContainer>
  )
}

export default Chat

const ChatMessages = styled.div``

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    /* font-size: 18px; */

  }
`
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`