import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './home.css';
import StreamCard from '../CommonComponents/StreamCard';

function FollwedCarusal({children}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
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
      <Slider ref={sliderRef} {...settings}>
         
         <StreamCard/>
         <StreamCard/>
         <StreamCard/>
         <StreamCard/>
         <StreamCard/>
         <StreamCard/>
         <StreamCard/>
         


      </Slider>
      <div className='d-flex align-items-center justify-content-center gap-3 mt-5' style={{position:'absolute',zIndex:'9999',top:'-95px',right:'10px'}}>
        <div
          className='d-flex align-items-center justify-content-center text-white'
          style={{
            width: '20px',
            height: '20px',
            cursor: 'pointer',
            background: 'white',
            borderRadius: '64px',
            padding: '20px',
            border:'1px solid rgba(234, 236, 240, 1)',
            zIndex: 1, // Add z-index
          }}
          onClick={goToPrevSlide}
        >
          <ChevronLeftIcon sx={{ fontWeight: 'bold', color: 'black', fontSize: '22px' }} />
        </div>

        <div
          className='d-flex align-items-center justify-content-center text-white'
          style={{
            width: '20px',
            height: '20px',
            cursor: 'pointer',
            background: 'white',
            borderRadius: '64px',
            padding: '20px',
            border:'1px solid rgba(234, 236, 240, 1)',
            zIndex: 1, // Add z-index
          }}
          onClick={goToNextSlide}
        >
          <ChevronRightIcon sx={{ fontWeight: 'bold', color: 'black', fontSize: '22px' }} />
        </div>
      </div>
    </div>
  );
}

export default FollwedCarusal;
