import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea, CardActions } from '@mui/material';

export default function CarusalCard() {
  return (
    <Card sx={{ maxWidth: 345,borderRadius:'24px',border:'1px solid #EAECF0',margin:'2px 5px' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          “
          </Typography>
          <Typography variant="body2" color="sub-heading">
          Lorem ipsum dolor sit amet consectetur. Pretium pretium proin fusce risus massa. Vel quisque tortor tortor mus nunc venenatis.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography sx={{display:'flex',alignItems:'center',gap:'15px'}}>
            <Avatar size='large'/>
            <div className='sub-heading' style={{fontSize:'24px',fontWeight:'500'}}>Rex Cimol</div>
        </Typography>
      </CardActions>
    </Card>
  );
}
