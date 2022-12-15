import React, { useRef } from 'react'
import styled from "styled-components"
import Button from '@mui/material/Button';
import { db } from '../firebase';
import firebase from 'firebase';

function ChatInput({channelName, channelId, chatRef}) {

  const inputRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: inputRef.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Lily Torres",
      userImage: "https://images.unsplash.com/photo-1609708993734-29d07306bdc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgyfHxwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    })

    inputRef.current.value = "";
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    })

  }
  return (
    <ChatInputContainer>
      <form>
        <input ref={inputRef} placeholder={`Message #${channelName}`} />
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