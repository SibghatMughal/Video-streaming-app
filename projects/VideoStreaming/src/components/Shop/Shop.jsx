import React from 'react'
import './shop.css';
import ShopBanner from './ShopBanner';
import Layout from '../Layout/Layout';
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { FilterAlt, VideocamOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ShopingCard from './ShopingCard';
import Banner from '../CommonComponents/Banner';
import BounusSection from '../LandingPage/BounusSection';







const searchMinWidth = "300px"; // Define the minimum width for the search bar




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



  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ marginTop:'24px' }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }




function Shop() {

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Layout>
    <div className='shop-section'>
    <div className="videoIcon">
        <VideocamOutlined sx={{color:'white'}}/>
      </div>
         <div className="shop-banner">
            <ShopBanner/>
         </div>
         <div className="my-3">
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
         </div>

         <div className="tabs-section">
         <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Free 20%" {...a11yProps(1)} />
          <Tab label="Beauty" {...a11yProps(2)} />
          <Tab label="Electronic" {...a11yProps(3)} />
          <Tab label="Sport" {...a11yProps(4)} />
          <Tab label="Food" {...a11yProps(5)} />
          <Tab label="T-Shirt" {...a11yProps(6)} />
          <Tab label="Shoes" {...a11yProps(7)} />
          <Tab label="Accessories" {...a11yProps(7)} />
          <Tab label="Ransel" {...a11yProps(8)} />


        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ShopingCard/>
        <div className='my-4'>
            <Banner/>
        </div>
        <ShopingCard/>
        <div className="my-4">
            <BounusSection/>
        </div>
        <ShopingCard/>
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Free 20%
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Beauty
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Electronincs
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Sports
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Food
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        T-shirts
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        Shoes
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        Accesseries
      </CustomTabPanel>
      <CustomTabPanel value={value} index={9}>
        Ransel
      </CustomTabPanel>
    </Box>
         </div>
    </div>
    </Layout>
  )
}

export default Shop