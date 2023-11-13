import React from 'react'
import Banner from './Banner';
import { styled } from "@mui/material/styles";
import './common.css';
import SalesCard from './SalesCard';
import WishLIstCard from './WishListCard';
import BounusSection from '../LandingPage/BounusSection';
import StreamCard from './StreamCard';

function Common() {
  return (
    <>
    <div className='d-flex align-items-center  justify-content-center my-5 flex-column '>

    <div className='w-100 h-100 d-flex align-items-center my-2   justify-content-between ' >
        <Banner/>
    </div>
        <SalesCard/>

         <div>
            <WishLIstCard/>
         </div>
         <BounusSection/>

         <div className='mt-3'>
          <StreamCard/>
         </div>
    </div>
    </>
  )
}

export default Common;