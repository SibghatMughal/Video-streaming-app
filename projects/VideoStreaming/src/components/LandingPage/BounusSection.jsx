import { CopyAll } from '@mui/icons-material'
import React from 'react'

function BounusSection() {
  return (
    <div className='bounus-section'>
        <div className="heading">
        Get more bonus and discount by Inviting your friends to join str3mly!
        </div>
        <div className="ref-link">
            <div className="sub-heading">Copy and share the link below to your friends!</div>
            <div className="box">
                <div className="text">Login or Sign up to get your referral link</div>
                <div className="btn"><CopyAll/> Copy link</div>
            </div>
        </div>
    </div>
  )
}

export default BounusSection