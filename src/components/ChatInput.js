import React, { useRef } from 'react'
import styled from "styled-components"
import Button from '@mui/material/Button';
import { db } from '../firebase';
import firebase from 'firebase';

function ChatInput({ChannelName, channelId}) {

  const inputRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: inputRef.current.value,
      tiomestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "User Name",
      userImage: "https://images.unsplash.com/photo-1670758548386-5ce5c355b5e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    })

    inputRef.current.value = "";


  }
  return (
    <ChatInputContainer>
      <form>
        <input ref={inputRef} placeholder={`Message ${ChannelName}`} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>

      </form>

    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`