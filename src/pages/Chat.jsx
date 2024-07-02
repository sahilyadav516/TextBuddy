import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material';
import {AttachFile as AttachFileIcon, Send as SendIcon} from "@mui/icons-material"
import { InputBox } from '../components/styles/StyledComponents';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../constants/SampleData';
import MessageComponent from '../components/shared/MessageComponent';
const user={
  _id:"sjhjass",
  name:"sahil yadav"
};
const Chat = () => {
  const containerRef=useRef(null);
  const fileMenuRef=useRef(null);
  return (
    <>
    <Stack
    ref={containerRef}
    boxSizing={"border-box"}
    padding={"1rem"}
    spacing={"1rem"}
    bgcolor={"rgba(247,247,247,1)"}
    height={"85%"}
    sx={{
      overflowX:"hidden",
      OverflowY:"auto",
    }}
    >
      {
        sampleMessage.map((i)=>(
          <MessageComponent key={i._id} message={i} user={user}/>
        )
          
        )
      }
    </Stack>
    <form
    style={{
      height:"10%",
      display:'flex',
      alignItems:'center',
      margin:"0.1rem"
    }}>
      <Stack>
        <IconButton >
          <AttachFileIcon/>
        </IconButton>
      </Stack>
      <InputBox placeholder='Type message here..'/>
      <IconButton type='submit'
      sx={{
        bgcolor:'white',
        "&:hover":{
          bgcolor:"error.dark",
        },
      }}>
        <SendIcon/>
      </IconButton>
    </form>
    <FileMenu/>
    </>
  )
}

export default AppLayout()(Chat)
