import React from 'react'
import styled from "styled-components"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Slack Clone</h2>
          <h3>
            <FiberManualRecordIcon />
            User Name
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
    </SidebarContainer>
  )
}

export default Sidebar

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
`

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`

const SidebarInfo = styled.div`

`