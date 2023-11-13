import { ArrowForward } from '@mui/icons-material'
import { Button, backdropClasses } from '@mui/material'
import React from 'react'
import hero  from '../../assets/images/hero.png'



const btn= {
    fontSize: '18px',
    fontWeight: 600,
    borderRadius: '64px',
    background: 'rgba(214, 47, 127, 1)',
      color: 'white',
      whiteSpace:'nowrap',
    '&:hover': {
      background: 'white',
      color: 'rgba(214, 47, 127, 1)',
    },
  };
  const arrowIcon = {
    color: 'white',
    '&:hover': {
      color: 'rgba(214, 47, 127, 1)',
    },
  }

  


function ShopBanner() {
  return (
    <div className='banners'>
        <div className="left-section">
            <img src={hero} alt="banner image" />
        </div>
        <div className="right-section">

        <div className="headings">
        Get 50% discount for all your fashion needs on Str3mly today
        </div>
        <Button variant='contained' sx={btn} endIcon={<ArrowForward sx={arrowIcon}/>}>
        Shop Now
        </Button>
        </div>
    </div>
  )
}

export default ShopBanner