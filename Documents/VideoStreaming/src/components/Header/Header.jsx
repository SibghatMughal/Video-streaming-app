import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "@mui/material/Button";
import { AddCard, AddShoppingCart, Filter, FilterAlt, Sort, VideoCall } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const searchMinWidth = "300px"; // Define the minimum width for the search bar

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "64px",
  backgroundColor: "#F2F4F7",
  color: "#667085",
  borderColor: "#EAECF0",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(3),
    width: "100%"
  },
  [theme.breakpoints.up("md")]: {
    display:'none'
  }
}));


const InsideSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "64px",
  backgroundColor: "#F2F4F7",
  color: "#667085",
  alignItems:'right',
  borderColor: "#EAECF0",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display:'none',
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

const ShowLiveButton = styled(Button)(({ theme }) => ({
  background: "#D62F7F",
  display: "flex",
  fontSize:'16px',
  fontWeight:'500',
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "nowrap",
  borderRadius: "64px",
  whiteSpace: "nowrap",
  margin:'0px 12px',
  padding:'12px 32px',
  '&:hover': { // Separate the styles for hover within curly braces
    background:  "#e54791", // Change the background color on hover
  },
  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}));
const ContentWrapReverse = styled('div')(({theme})=>({

  display: 'flex',
  alignItems: 'center',
  flexWrap:'nowrap',
  flexGrow:1,
  gap:'12px',
  [theme.breakpoints.down("md")]: {
    justifyContent: 'right',
  }
}));

const Navbar = styled('div')(({theme})=>({

  flexGrow:1,
  width:'100%',
  height:'70px',
  borderBottom:'1px solid #EAECF0',
  position:'fixed',
  top:0,
  zIndex:9999,
  [theme.breakpoints.down("md")]: {
    height: '130px',
  borderBottom:'none',

  }
}));

// Add styles for the filter button
const FilterButton = styled(Button)(({ theme }) => ({
  position:'absolute',
  right:'6px',
  top:'2px',
  color:'black',
  fontWeight:'bold',
  border:'none',
backgroundColor:'white',
   // Adjust the margin as needed
  borderRadius: '64px',
  whiteSpace: 'nowrap',
  cursor:'pointer'
}));

const CustomToolBar = styled(Button)(({ theme }) => ({
  background:'none',
  [theme.breakpoints.down("md")]: {
    background:'white'

  }

}));



const borderStyle = "1px solid #EAECF0"; // Define border style

const Header = () => {
  const menuId = "primary-search-account-menu";

  return (
    <>
    
    <Navbar>
      <AppBar position="static" sx={{ background: "white"}}>
        <Toolbar className="border">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2,marginTop:'-8px', color: "#D62F7F",fontSize:'32px',fontWeight:'800'}}
          >
           Str3mly
          </IconButton>

         <ContentWrapReverse>
          <InsideSearch>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ minWidth: searchMinWidth }} // Set the minWidth for the search bar
            />
            <FilterButton variant="outlined" color="primary" startIcon={<FilterAlt sx={{color:'black'}}/>}>
               Filter
                  </FilterButton>
          </InsideSearch>
          <Link to='/streaming'>
          <ShowLiveButton variant="contained" startIcon={<VideoCall sx={{fontWeight:'bold',fontSize:'24px'}}/>}>Start Live</ShowLiveButton>
          </Link>
          <Box sx={{ display: "flex", alignItems: "center",gap:'12px' }}>
            <IconButton
              size="large"
              sx={{ border: borderStyle, width: "50px", height: "50px" }}
            >
              <Badge badgeContent={4} color="error">
                <AddShoppingCart sx={{ color: "gray", fontSize: "35px" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ border: borderStyle, width: "50px", height: "50px" }}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon sx={{ color: "gray", fontSize: "35px" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              sx={{ border: borderStyle, width: "50px", height: "50px" }}
            >
              <Avatar sx={{ color: "gray", fontSize: "40px" }} />
            </IconButton>
          </Box>
          </ContentWrapReverse>
        </Toolbar>

       
      </AppBar>
      <AppBar position="static" sx={{background:'none',border:'none',boxShadow:'none'}}>
      <CustomToolBar>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ minWidth: '100%' }} // Set the minWidth for the search bar
            />
            <FilterButton variant="outlined"  startIcon={<FilterAlt sx={{color:'black',fontSize:'50px','&:hover': { 
    color:  "#e54791", 
  },}}/>} style={{background:'transparent',height:'100%',right:'1px',bottom:'2',top:'0'}}/>
          </Search>
          </CustomToolBar>
      </AppBar>
    </Navbar>
     
    

    </>
  );
};

export default Header;
