import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { ArrowUpward } from '@mui/icons-material';

function LiveCard({title , revnue,percent}) {
  return (
    <Card sx={{ width:'100%',border:'1px solid rgba(234, 236, 240, 1)',borderRadius:'16px',padding:'0px 16px' }}>
    <CardContent>
     <div className='card-title'>{title}</div>
      <div className='d-flex align-items-center justify-content-between w-100'>
        <div className="card-revnue">{revnue}</div>
        <div className="card-btn"><ArrowUpward sx={{color:'rgba(16, 24, 40, 1)'}}/> {percent}%</div>
      </div>
    </CardContent>
  </Card>
  )
}

export default LiveCard