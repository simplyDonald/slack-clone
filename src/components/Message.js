import React from 'react'
import styled from "styled-components"

function Message({message, timestamp, user, userImage}) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <p>hi there , my name is pranip</p>
    </MessageContainer>
  )
}

export default Message;

const MessageContainer = styled.div`
  color: black;
`