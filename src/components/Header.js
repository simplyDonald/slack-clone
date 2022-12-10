import React from 'react'
import styled from "styled-components"
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Header() {
  return (
    <HeaderContainer>
      {/* Header left */}
      <HeaderLeft>
        <HeaderAvatar 
          //TODO: Add onClick
        />
        <AccessTimeIcon />
      </HeaderLeft>
      {/* Header Search */}
      {/* Header right */}
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
  color: red;
`
;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``;
