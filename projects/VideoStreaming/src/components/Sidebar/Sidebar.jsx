import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText";
import { AccountCircle, CottageOutlined, EqualizerOutlined, Explore, ExploreOutlined, Favorite, FavoriteBorder, FavoriteOutlined, Home, Report, Settings, Shop, StorefrontOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";


const sidebarStyles = {
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    borderRadius: '8px',
    padding: '12px',
    "&:hover": {
      backgroundColor: "#FFECF5",
      cursor: 'pointer',
    },
  },
  listItemText: {
    color: "#667085",
    "&:hover": {
      color: '#D62F7F',
    }
  },
  icon: {
    color: "#667085",
    marginRight: '5px',
    "&:hover": {
      color: '#D62F7F',
    }
  },
  IconsItem:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
    width:'50px',
    height:'50px',
    padding: '8px',
    "&:hover": {
      backgroundColor: "#FFECF5",
      cursor: 'pointer',
  }
}
};
const SideBar = styled('div')(({theme})=>({

    borderRight: '1px solid #EAECF0',
    width: '250px',
    position:'fixed',
    top:'65px',
    zIndex: 9999,
    [theme.breakpoints.down("md")]: {
      display:'none'
    }
  }));

  const LowerAppBar = styled('div')(({ theme }) => ({
    width:'100vw',
    position:'fixed',
    bottom:0,
    zIndex:'99',
    height:'60px',
    display:'none',
    alignItems:'center',
    justifyContent:'space-around',
    borderTop:'1px solid #EAECF0',
    backgroundColor:'white',
    padding:'24px',
      [theme.breakpoints.down("md")]: {
      display:'flex'
  
    }
  
  }));

const Sidebar = () => {
  const location = useLocation();
  console.log('location ',location.pathname)
  return (
    <>
    <SideBar>
      <List sx={{ background: 'white', height: '100vh',padding:'24px' }}>
     <Link to='/home'>
        <ListItem sx={sidebarStyles.listItem}>
          <CottageOutlined sx={sidebarStyles.icon} />
          <ListItemText primary="Home" sx={sidebarStyles.listItemText} />
        </ListItem>
        </Link>
     <Link to='/'>
        <ListItem sx={sidebarStyles.listItem}>
          <ExploreOutlined sx={sidebarStyles.icon} />
          <ListItemText primary="Discover" sx={sidebarStyles.listItemText} />
        </ListItem>
        </Link>
     <Link to='/shop'>
        <ListItem sx={sidebarStyles.listItem}>
          <StorefrontOutlined sx={sidebarStyles.icon} />
          <ListItemText primary="Shop" sx={sidebarStyles.listItemText} />
        </ListItem>
        </Link>
     <Link to='/live-report'>
        <ListItem sx={sidebarStyles.listItem}>
          <EqualizerOutlined sx={sidebarStyles.icon} />
          <ListItemText primary="Live Report" sx={sidebarStyles.listItemText} />
        </ListItem>
        </Link>
     <Link to='/wishlist'>
        <ListItem sx={sidebarStyles.listItem}>
          <FavoriteBorder sx={sidebarStyles.icon} />
          <ListItemText primary="Wishlist" sx={sidebarStyles.listItemText} />
        </ListItem>
        </Link>
      </List>
    </SideBar>
   {location.pathname=='/streaming'|| location.pathname=='/wishlist'?'':
    <LowerAppBar >
     <Link to='/home'>
    <ListItem sx={sidebarStyles.IconsItem}>
          <CottageOutlined sx={sidebarStyles.icon} />
        </ListItem>
     </Link>
     <Link to='/'>
        <ListItem sx={sidebarStyles.IconsItem}>
          <ExploreOutlined sx={sidebarStyles.icon} />
        </ListItem>
        </Link>
     <Link to='/shop'>
        <ListItem sx={sidebarStyles.IconsItem}>
          <StorefrontOutlined sx={sidebarStyles.icon} />
        </ListItem>
        </Link>
     <Link to='/live-report'>
        <ListItem sx={sidebarStyles.IconsItem}>
          <EqualizerOutlined sx={sidebarStyles.icon} />
        </ListItem>
        </Link>
     <Link to='/wishlist'>
        <ListItem sx={sidebarStyles.IconsItem}>
          <FavoriteBorder sx={sidebarStyles.icon} />
        </ListItem>
        </Link>
          

    </LowerAppBar>
}
    </>
  );
};

export default Sidebar;
