import { ArrowForward } from '@mui/icons-material'
import { Button, backdropClasses } from '@mui/material'
import React from 'react'



const btn= {
    fontSize: '18px',
    fontWeight: 600,
    borderRadius: '64px',
    background: 'white',
      color: '#D62F7F',
      whiteSpace:'nowrap',
    '&:hover': {
      background: '#D62F7F',
      color: '#FFFFFF',
    },
  };
  const arrowIcon = {
    color: '#D62F7F',
    '&:hover': {
      color: '#FFFFFF',
    },
  }

  


function Banner() {
  return (
    <div className='banner-section'>
        <div className="right-section">

        <div className="headings">
        Have a product sell? Don’t worry, Str3mly is the solution for you!
        </div>
        <Button variant='contained' sx={btn} endIcon={<ArrowForward sx={arrowIcon}/>}>
        Become a Seller
        </Button>
        </div>
    </div>
  )
}

export default Banner