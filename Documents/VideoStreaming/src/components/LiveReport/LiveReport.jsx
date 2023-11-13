import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './live.css'
import LiveCard from './LiveCard';
import Layout from '../Layout/Layout';
import { Avatar, Paper } from '@mui/material';
import { VideocamOutlined } from '@mui/icons-material';


function createData(no,name, stock, orders,orderpaid, revenue) {
    return { no,name, stock, orders,orderpaid, revenue };
  }
  
  const rows = [
    createData(1, 'Frozen Yoghurt', 100, 10, 10, '$100'),
  createData(2, 'Ice Cream Sandwich',100, 10, 10, '$100'),
  createData(3, 'Eclair', 100, 10, 10, '$100'),
  createData(4, 'Cupcake',100, 10, 10, '$100'),
  createData(5, 'Gingerbread', 100, 10, 10, '$100'),
  createData(6, 'Pumpkin Pie',100, 10, 10, '$100'),
  createData(7, 'Chocolate Cake', 100, 10, 10, '$100'),
  createData(8, 'Strawberry Shortcake', 100, 10, 10, '$100'),
  createData(9, 'Cheesecake',100, 10, 10, '$100'),
  createData(10, 'Tiramisu', 100, 10, 10, '$100'),
  createData(11, 'Banana Split', 100, 10, 10, '$100'),


  ];

const borderRight= {
    borderRight:'1px solid lightgray'
  }
const tableHeader = {
  backgroundColor:'rgba(234, 236, 240, 1)',
  fontweight:'bolder !important',
  color:'black'
}


 function LiveReport() {
  return (
    <Layout>
    <div className='live-section'>
        <div className="card-section">
  
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <LiveCard title='Revenue' revnue='$102' percent='20'/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <LiveCard title='Unit Sales' revnue='120' percent='15'/>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <LiveCard title='Viewers' revnue='120K' percent='10'/>
        </Grid>
      </Grid>
      </div>

      <div className="videoIcon">
        <VideocamOutlined sx={{color:'white'}}/>
      </div>
      <TableContainer sx={{borderRadius:'16px',border:'1px solid rgba(234, 236, 240, 1)'}} className='containtable' component={Paper}>
      <Table sx={{ minWidth: '100%' }} className='table'>
        <TableHead  className='tablehead'>
          <TableRow>
            <TableCell style={tableHeader} sx={borderRight}>No</TableCell>
            <TableCell style={tableHeader} sx={borderRight} align="left">Name Product</TableCell>
            <TableCell style={tableHeader} sx={borderRight} align="left">Stock</TableCell>
            <TableCell style={tableHeader} sx={borderRight} align="left">Orders Create</TableCell>
            <TableCell style={tableHeader} sx={borderRight} align="left">Orders Paid</TableCell>
            <TableCell style={tableHeader} sx={borderRight} align="left">Revenue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell sx={borderRight} align="left">{row.no}</TableCell>
              <TableCell sx={borderRight} style={{display:'flex',alignItems:'center'}} align="left"><Avatar sx={{marginRight:'8px'}}>A</Avatar> {row.name}</TableCell>
              <TableCell sx={borderRight} align="left">{row.stock}</TableCell>
              <TableCell sx={borderRight} align="left">{row.orders}</TableCell>
              <TableCell sx={borderRight} align="left">{row.orderpaid}</TableCell>
              <TableCell sx={borderRight} align="left">{row.revenue}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </Layout>
  );
}
export default LiveReport;
