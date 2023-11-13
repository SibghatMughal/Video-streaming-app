import React from 'react'
import './wishlist.css';
import { styled } from "@mui/material/styles";
import { Avatar, Button, Checkbox, Grid } from '@mui/material';
import Layout from '../Layout/Layout'
import WishLIstCard from '../CommonComponents/WishListCard'
import { Add, ArrowOutward, Close } from '@mui/icons-material';
import SalesCard from '../CommonComponents/SalesCard'
import WishRightCard from './WishRightCard';

const LargeScreenLayout = styled('div')(({ theme }) => ({
  width: '100%',
  padding: '12px',
  [theme.breakpoints.down("md")]: {
    display: 'none'
  }
}));
const SmallScreenLayout = styled('div')(({ theme }) => ({
    width: '100%',
    padding: '12px',
    [theme.breakpoints.up("md")]: {
      display: 'none'
    }
  }));
const votebtn = {
    color:'white',
    fontSize:'14px',
    fontWeight:'600',
    borderRadius:'64px',
    padding:'8px 20px',
    background:'#D62F7F',
    width:'100%',
    '&:hover':{
      color:'#D62F7F',
      border:'1px solid #D62F7F',
    }

}
const heading = {
    color:'rgba(16, 24, 40, 1)',
    fontSize:'20px',
    fontWeight:'600',
    whiteSpace: 'nowrap',
    marginBottom:'8px'
  }

 

function WishList() {
    const peopleCount= [1,2,3,4,5,6,7,8,9,10];
    const userCount = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  return (
    <Layout>
    <div className='wishlist-section'>
        {/* screen for large devices  */}
      <LargeScreenLayout>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} sx={{ borderRight: '1px solid lightgray',paddingRight:'12px', }}>
             <div className="d-flex align-items-center justify-content-between w-100 my-2 ">
                <div className="title">Shared Wishlist</div>
                <div className="btn"><Add sx={{color:'rgba(214, 47, 127, 1)'}}/> Add Friend</div>
             </div>
            <Grid container spacing={2}>
              <Grid item sm={12} md={12}  lg={6}>
              <WishLIstCard/>
              </Grid>
              <Grid item sm={12} md={12}  lg={6}>
              <WishLIstCard/>
              </Grid>

              <Grid item sm={12} md={12}  lg={6}>
              <WishLIstCard/>
              </Grid>
              <Grid item sm={12} md={12}  lg={6}>
              <WishLIstCard/>
              </Grid>

              <Grid item sm={12} md={12}  lg={6}>
              <WishLIstCard/>
              </Grid>
              <Grid item sm={12} md={12}  lg={6}>
              <WishLIstCard/>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6} md={6} sx={{paddingLeft:'12px', }}>
          <div className="d-flex align-items-center justify-content-between w-100 my-3 ">
                <div className="grid-heading">Wishlist Product Details</div>
                <Close sx={{color:'rgba(102, 112, 133, 1)',cursor:'pointer'}}/>
             </div>

            <Grid container spacing={2}>
              <Grid item sm={12} md={12}  lg={6}>
              <WishRightCard/>
              </Grid>
              <Grid item sm={12} md={12} lg={6}>
                <div className='vote-section'>
           

                 <div className="d-flex align-items-center gap-2 w-100 ">
<Checkbox
defaultChecked
sx={{
width:'25px',
height:'25px',
borderRadius:'100px',
color: '#D62F7F',
"&.Mui-checked": {
color: '#D62F7F',
},
}}
/>
<CustomProgressBar value={70} text="70%" />



                  </div>
                  <div className='voted'>
                  {peopleCount.map((people)=>{
                    return (
                        <>
                  <div className="peoples ">
                  <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyStuS8wJ6ulAvWptICZiDOEzTIsqVuH_vLt4x9w2ruNC5S489Nrv8th38ipqJIsv6mfA&usqp=CAU" />
                    <div className="name">Username</div>
                    <div className="text">Vote on this</div>
                  </div>
                        </>
                    )
                  })}

                  </div>

                  <div className="vote-btn">
                    <Button sx={votebtn}>Vote</Button>
                  </div>
                </div>
              </Grid>
              <Grid item sm={12} md={12}>
              <div style={{position:'relative',width:'100%',height:'600px' }}>
  <div style={heading}>Comments</div>
  <div className="user-section">
    {userCount.map((user, index) => (
      <div key={index} className="d-flex align-items-center gap-3 my-2">
        <Avatar
          // src="/path/to/image.jpg"
          alt="User Avatar"
          sx={{ width: 50, height: 50 }}
        />
        <div className="d-flex align-items-start flex-column">
          <div className="text">Username</div>
          <div className="subText" style={{color:'rgba(102, 112, 133, 1)',fontSize:'14px',fontWeight:'400'}}>I don’t Like this</div>
        </div>
      </div>
    ))}
  </div>

  <div className="user-footer">
    <input type="text"  placeholder='Start ask q Question'/>
    <div className='footer-btn'><ArrowOutward/></div>

</div>
</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </LargeScreenLayout>
       {/* screen for small devices  */}
       <SmallScreenLayout>
       <div className="d-flex align-items-center justify-content-between w-100 my-2 ">
                <div className="title" style={{color:'rgba(102, 112, 133, 1)'}}>Shared Wishlist</div>
                <div className="btn"><Add sx={{color:'rgba(214, 47, 127, 1)'}}/> Add Friend</div>
             </div>
            
             <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
              <SalesCard/>
              </Grid>
              <Grid item xs={12} md={12}>
                <div className='vote-section'>
           

                 <div className="d-flex align-items-center gap-2 w-100 ">
<Checkbox
defaultChecked
sx={{
width:'25px',
height:'25px',
borderRadius:'100px',
color: '#D62F7F',
"&.Mui-checked": {
color: '#D62F7F',
},
}}
/>
<CustomProgressBar value={70} text="70%" />



                  </div>
                  <div className='voted'>
                  {peopleCount.map((people)=>{
                    return (
                        <>
                  <div className="peoples ">
                  <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyStuS8wJ6ulAvWptICZiDOEzTIsqVuH_vLt4x9w2ruNC5S489Nrv8th38ipqJIsv6mfA&usqp=CAU" />
                    <div className="name">Username</div>
                    <div className="text">Vote on this</div>
                  </div>
                        </>
                    )
                  })}

                  </div>

                  <div className="vote-btn">
                    <Button sx={votebtn}>Vote</Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={12}>
              <div style={{position:'relative',width:'100%',height:'600px' }}>
  <div style={heading}>Comments</div>
  <div className="user-section">
    {userCount.map((user, index) => (
      <div key={index} className="d-flex align-items-center gap-3 my-2">
        <Avatar
          // src="/path/to/image.jpg"
          alt="User Avatar"
          sx={{ width: 50, height: 50 }}
        />
        <div className="d-flex align-items-start flex-column">
          <div className="text">Username</div>
          <div className="subText" style={{color:'rgba(102, 112, 133, 1)',fontSize:'14px',fontWeight:'400'}}>I don’t Like this</div>
        </div>
      </div>
    ))}
  </div>

  <div className="user-footer">
    <input type="text"  placeholder='Start ask q Question'/>
    <div className='footer-btn'><ArrowOutward/></div>

</div>
</div>
              </Grid>
            </Grid>

       </SmallScreenLayout>
    </div>
    </Layout>
  )
}

export default WishList;






const CustomProgressBar = ({ value, text }) => {
    const progressBarStyles = {
      width: '100%',
      height: '20px',
      backgroundColor: '#ccc',
      borderRadius: '10px',
      position: 'relative',
    };
  
    const progressStyles = {
      width: `${value}%`,
      height: '100%',
      backgroundColor: '#D62F7F',
      borderRadius: '10px',
      position: 'absolute',
      transition: 'width 0.3s ease-in-out',
    };
  
    const textStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#fff',
      fontWeight: 'bold',
    };
  
    return (
      <div style={progressBarStyles}>
        <div style={progressStyles}>
          <div style={textStyle}>{text}</div>
        </div>
      </div>
    );
  };
