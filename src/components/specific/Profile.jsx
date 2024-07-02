import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material';
import {Face as FaceIcon,AlternateEmail,
    AlternateEmail as UserNameIcon,
    CalendarMonth as CalendarIcon
} from '@mui/icons-material'
import moment from "moment";
const Profile = () => {
  return (
    <div >
        <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
            <Avatar
            sx={{
                width:200,
                height:200,
                objectFit:"contain",
                marginBottom:"1rem",
                border:"5px solid white",
                bgcolor:"black"
            }}
            />
            <ProfileCard heading={"bio"} text={"hey this is sahil"} Icon={<UserNameIcon/>}/>
            <ProfileCard heading={"username"} text={"ydv_s"} Icon={<UserNameIcon/>}/>
            <ProfileCard heading={"bio"} text={"hey this is sahil"} Icon={<CalendarIcon/>}/>
            <ProfileCard heading={"bio"} text={"hey this is sahil"} Icon={<CalendarIcon/>}/>
        </Stack>
      
    </div>
  )
};
const ProfileCard=({text,Icon,heading})=>(
<Stack direction={"row"}
 alignItems={"center"}
 spacing={"1rem"}

 textAlign={"center"}
 sx={{
    borderBottom:"1px solid black",
    width:"100%",
    transition: "border-color 0.3s", // Added transition for smooth color change
    '&:hover': {
        borderColor: "#1D4ED8", // Change border color on hover
        color: "#1D4ED8"
    }
}}
>
{Icon && Icon}
    <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography variant="caption">
            {heading}
        </Typography>
    </Stack>

</Stack>
);



export default Profile
