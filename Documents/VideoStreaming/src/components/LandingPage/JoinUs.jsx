import { ArrowForward } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

function JoinUs() {
  return (
    <div className='join-section'>
       <div className='content'>
        <div className="text">What are waiting for? Join with us now!</div>
        <Button variant='contained' endIcon={<ArrowForward color='white'/>} sx={{
    borderRadius: '64px',
    background: '#D62F7F',
    color: 'white',
    '&:hover': {
      background: 'white', // Change background color on hover
      color: '#D62F7F', // Change text color on hover
    },
  }} >Get Started</Button>
       </div>
    </div>
  )
}

export default JoinUs