import { Add as AddIcon, Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from '@mui/icons-material'
import { Backdrop, Box, Button, ButtonGroup, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { Suspense, memo, useEffect, useState,lazy } from 'react'
import {useNavigate,useSearchParams} from "react-router-dom"
import { Link } from '../components/styles/StyledComponents'
import AvatarCard from '../components/shared/AvatarCard'
import { sampleChats, sampleUsers } from '../constants/SampleData'
import UserItem from '../components/shared/UserItem'

const ConfirmDeleteDialog=lazy(()=>import("../components/dialogs/ConfirmDeleteDialog"));
const AddMemberDialog=lazy(()=>import("../components/dialogs/AddMemberDialog"));
const isAddMember=false;
const Groups = () => {
  const chatId=useSearchParams()[0].get("group");
  
  const navigate=useNavigate();
  const navigateBack=()=>{
      navigate("/");
  }
  const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
  const [isEdit,setIsEdit]=useState(false);

  const handleMobile=()=>{
    setIsMobileMenuOpen(prev=>!prev);
  };

  const handleMobileClose=()=>setIsMobileMenuOpen(false);
  const updateGroupName=()=>{
    setIsEdit(false);
    
  }
  const [groupName,setGroupName]=useState("");
  const [groupNameUpdatedValue,setGroupNameUpdatedValue]=useState("");
  const openConfirmDeleteHandler=()=>{
    setConfirmDeleteDialog(true);
  };
  const closeConfirmDeleteHandler=()=>{
    setConfirmDeleteDialog(false);
  };
  const deleteHandler=()=>{
    console.log("delete");
    closeConfirmDeleteHandler();
  };
  const openAddMemberHandler=()=>{};

  const [confirmDeleteDialog,setConfirmDeleteDialog]=useState(false);
  const removeMemberHandler=()=>{};
  useEffect(()=>{
    if(chatId){
    setGroupName(`GroupName ${chatId}`);
    setGroupNameUpdatedValue(`GroupName ${chatId}`);
    } 
    return()=>{
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    }
  },[chatId])
  const IconBtns=(
    <>
    <Box
    sx={{
      display:{
        xs:"block",
        sm:"none",
        position:"fixed",
        right:"1rem",
        top:"1rem",
        
        
      },
    }}>
    <IconButton onClick={handleMobile}>
      <MenuIcon/>
    </IconButton>
    
    </Box>
    <Tooltip title="back">
      <IconButton
      sx={{
        position:"absolute",
        top:"2rem",
        left:"2rem",
        bgcolor:"#1D4ED8",
        color:"white",
        ":hover":{
          bgcolor:"white",
          color:"#1D4ED8",
        },
      }}
      onClick={navigateBack}>
        <KeyboardBackspaceIcon/>
      </IconButton>
    </Tooltip>
    </>
  )
  const GroupName=(<Stack 
    direction={"row"}
    alignItems={"center"}
    justifyContent={"center"}
    spacing={"1rem"}
    padding={"3rem"}
   >{
  isEdit?(
  <>
  <TextField 
  value={groupNameUpdatedValue}
  onChange={(e)=>setGroupNameUpdatedValue(e.target.value)}/>
  <IconButton onClick={updateGroupName}>
    <DoneIcon/>
  </IconButton>
  </>
  ):(
  <>
  <Typography variant='h4'>
    {groupName}
    </Typography>
    <IconButton onClick={()=>setIsEdit(true)}>
      <EditIcon/>
    </IconButton>
    </>
    )}
    </Stack>
  );
  const ButtonGroup=<Stack
  direction={{
    xs:"column-reverse",
    sm:"row",
    
  }}
  spacing={"1rem"}
  p={{
    xs:"0",
    sm:"1rem",
    md:"1rem 4rem",
  }}
  >
    <Button size={"large"} color={"error"} startIcon={<DeleteIcon/>} onClick={openConfirmDeleteHandler}>Delete Group</Button>
    <Button size={"large"} startIcon={<AddIcon/>} onClick={openAddMemberHandler}>Add Member</Button>
  </Stack>
  return (
    <Grid container height={"100vh"}>
      <Grid item sx={{
        display:{
          xs:"none",
          sm:"block",
        },
      }}
      sm={4}
      bgcolor={"#1D4ED8"}
      borderBottom={"1px solid white"}
      color={"white"}>
        <GroupsList myGroups={sampleChats} chatId={chatId}/>
      </Grid>
      <Grid item xs={12} sm={8} sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        position:"relative",
        padding:"1rem 3rem"

      }}
>
        {IconBtns}
        {groupName && 
        <>
          {GroupName}
          <Typography
          margin={"2rem"}
          alignSelf={"center"}
          textAlign={"center"}
          variant='h5'

          >
            Members
          </Typography>
          <Stack
          maxWidth={"45rem"}
          width={"100%"}
          boxSizing={"border-box"}
          padding={{
            sm:"1rem",
            xs:"0",
            md:"1rem 4rem",
          }}
          spacing={"2rem"}
          
          border={"2px solid #1D4ED8"}
          height={"50vh"}
          overflow={"auto"}
          >
            {sampleUsers.map((i)=>(
              <UserItem user={i} key={i._id} isAdded styling={{
                boxShadow:"0 0 0.5rem rgba(0,0,0,0.2)",
                padding:"1rem 2rem",
                borderRadius:"0.5rem",
              }}
              handler={removeMemberHandler}/>
            ))} 
          </Stack>
          {ButtonGroup}
        </>}
      </Grid>
      {
        isAddMember && <Suspense fallback={<Backdrop open/>}><AddMemberDialog/></Suspense>
      }
      {
        confirmDeleteDialog && (
          <Suspense fallback={<Backdrop open/>}>
            <ConfirmDeleteDialog 
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}/>
            
           
          </Suspense>
        )

        
      }
      <Drawer open={isMobileMenuOpen} onClose={handleMobileClose}>
        <GroupsList w={"50vw"} myGroups={sampleChats} chatId={chatId}/>
      </Drawer>
    </Grid>
  )
}
const GroupsList = memo(({ w = "100%", myGroups = [], chatId }) => (
  <Stack width={w}
  sx={{
    height:"99vh",
    overflow:"auto",
  }}>
    {myGroups.length > 0 ? (
      myGroups.map((group) => <GroupListItem group={group} chatId={chatId} key={group._id}/>)
    ) : (
      <Typography textAlign={"center"} padding={"1rem"}>No groups</Typography>
    )}
  </Stack>
));

const GroupListItem=memo(({group,chatId})=>{
  const {name,avatar,_id}=group;
  return (<Link to={`?group=${_id}`}
  onClick={(e)=>{
    
    if(chatId === _id)
    e.preventDefault();
  }}>
  <Stack direction={"row"} spacing={"1rem"} alignItems={"center"} sx={{
    color:"white",
  }}>
    <AvatarCard avatar={avatar}/>
    <Typography>{name}</Typography>
  </Stack>
  </Link>
  );
});
export default Groups
