import React from 'react'
import styled from "styled-components"

function SidebarOption({Icon, title}) {
  return (
    <SidebarOptionContainer>
      {Icon && <Icon fontSize="small" style={{padding: 10}} />}
    </SidebarOptionContainer>
  )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`

`