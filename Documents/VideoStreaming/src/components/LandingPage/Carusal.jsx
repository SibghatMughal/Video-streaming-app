import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CarusalCard from './carusalCard';



function Carusal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        },
      },
    ],
    beforeChange: (current, next) => {
      setCurrentIndex(next);
    },
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="slider">
      <div style={{width:'90vw'}}>
        <Slider ref={sliderRef} {...settings}>
  

        <CarusalCard/>
        <CarusalCard/>
        <CarusalCard/>
        <CarusalCard/>
        <CarusalCard/>
        <CarusalCard/>
        <CarusalCard/>
        <CarusalCard/>
        <CarusalCard/>
          
        </Slider>
        <div className='d-flex align-items-center justify-content-center gap-3 mt-5'>
          <div className='d-flex align-items-center  justify-content-center text-white' style={{width:'20px',height:'20px',cursor:'pointer',background:'#D62F7F',borderRadius:'64px',padding:'12px'}}>

            <ChevronLeftIcon onClick={()=>goToPrevSlide()} sx={{fontWeight:'bold',color:'white',fontSize:'22px'}}/>
          </div>
         
          <div className='d-flex align-items-center  justify-content-center text-white  ' style={{width:'20px',height:'20px',cursor:'pointer',background:'#D62F7F',borderRadius:'64px',padding:'12px'}}>
            <ChevronRightIcon onClick={()=>goToNextSlide()} sx={{fontWeight:'bold',color:'white',fontSize:'22px'}} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Carusal;
