import {React,Suspense,useState,lazy} from 'react'

import {Box,AppBar, Toolbar, Typography, IconButton, Tooltip, Backdrop} from "@mui/material"
import {} from "../../constants/color"
import {Add as AddIcon,Menu as MenuIcon,Search as SearchIcon,Group as GroupIcon,Logout as LogoutIcon,Notifications as NotificationsIcon,} from "@mui/icons-material"
import {useNavigate} from "react-router-dom"

const SearchDialog=lazy(() => import("../specific/Search"));
const NotificationDialog=lazy(() => import("../specific/Notifications"));
const NewGroupDialog=lazy(() => import("../specific/NewGroup"));
const Header = () => {
  const navigate=useNavigate();
  const [isMobile,setIsMobile]=useState(false);
  const [isSearch,setIsSearch]=useState(false);
  const [isNewGroup,setIsNewGroup]=useState(false);
  const [isNotification,setIsNotification]=useState(false);

  const handleMobile=()=>{
    setIsMobile((prev)=>!prev);
  };
  const openSearch=()=>{
    setIsSearch((prev)=>!prev);
  }
  const openNewGroup=()=>{
    setIsNewGroup((prev)=>!prev);
  }
  const openNotification=()=>{
    setIsNotification((prev)=>!prev);
  }
  const navigateToGroup=()=>navigate("/groups");
  const logoutHandler=()=>{
    console.log("Logout");
  }
  
  
  return (
   <>
   
   <Box sx={{flexGrow:1}} height={"4rem"}>
    <AppBar position="static" sx={{
      bgcolor:"#1D4ED8",
    }}>
    <Toolbar>
          <Typography 
            variant="h6" 
            sx={{
              display:{xs:"none",sm:"block"},
              fontFamily: 'Poppins, sans-serif'
            }}
            
          >
          Chat APP
          </Typography>
          <Box 
          sx={{
              display:{xs:"block",sm:"none"},
            }}
          >
          <IconButton color="inherit" onClick={handleMobile}>
            <MenuIcon/>
          </IconButton>

          </Box>
          <Box
            sx={{
            flexGrow:1,
            }}
          />
          <Box>
          
          <IconBtn
          title={"search"}
          icon={<SearchIcon/>}
          onClick={openSearch}
          />
          <IconBtn
          title={"New Group"}
          icon={<AddIcon/>}
          onClick={openNewGroup}
          />
          <IconBtn
          title={"Manage Groups"}
          icon={<GroupIcon/>}
          onClick={navigateToGroup}
          />
          <IconBtn
          title={"Notifications"}
          icon={<NotificationsIcon/>}
          onClick={openNotification}
          />
          <IconBtn
          title={"Logout"}
          icon={<LogoutIcon/>}
          onClick={logoutHandler}
          />

          </Box>
    </Toolbar>
    </AppBar>

    </Box>
    { isSearch && (<Suspense fallback={<Backdrop open/>}>
    <SearchDialog/>
    </Suspense>
    
    )}
    { isNotification && (<Suspense fallback={<Backdrop open/>}>
    <NotificationDialog/>
    </Suspense>
    
    )}
    { isNewGroup && (<Suspense fallback={<Backdrop open/>}>
    <NewGroupDialog/>
    </Suspense>
    
    )}
   
      
   </>

  );
};
const IconBtn=({title,icon,onClick})=>{
  return(
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}
export default Header
