import React from 'react'
import Layout from '../Layout/Layout'
import './home.css';
import CarusalSection from './Slider';
import FollwedCarusal from './FollwedCarusal';
import Banner from '../CommonComponents/Banner';
import BounusSection from '../LandingPage/BounusSection';
import { VideocamOutlined } from '@mui/icons-material';
function Home() {
  const profileCount = [1,2,3,4,5 ,6,7,8,9,10,11,12];

  return (
    <Layout>
         <div className="home-section">
         <div className="videoIcon">
        <VideocamOutlined sx={{color:'white'}}/>
      </div>
          <div className="section-component">
          <div className="d-flex align-items-start justify-content-start flex-column gap-2 snippets ">
            <div className="home-title">Latest Snippets</div>
              

              <CarusalSection/>
               </div>
                </div>

                {/* followed card section  */}
                <div className="section-component">
          <div className="d-flex align-items-start justify-content-start flex-column gap-2 snippets ">
            <div className="home-title">Recommended For You</div>
              
                 <FollwedCarusal/>
               </div>
                </div>

                {/* banner section  */}
                <div className="section-component">
                  <Banner/>
                </div>

                {/* populor streams  */}
                <div className="section-component mt-4 ">
          <div className="d-flex align-items-start justify-content-start flex-column gap-2 snippets ">
            <div className="home-title">Popular Streams</div>
              
                 <FollwedCarusal/>
               </div>
                </div>
               {/* bonus section  */}
                <div className="section-component">
                  <BounusSection/>
                </div>
                <div className="section-component mt-2 ">
          <div className="d-flex align-items-start justify-content-start flex-column gap-2 snippets ">
            <div className="home-title">Past Streams</div>
              
                 <FollwedCarusal/>
               </div>
                </div>


                </div>
    </Layout>
  )
}

export default Home