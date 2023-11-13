import { Grid } from '@mui/material'
import React from 'react'
import SalesCard from '../CommonComponents/SalesCard'

function ShopingCard() {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} md={6} lg={4}>
      <SalesCard/>
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      <SalesCard/>
    </Grid>
    <Grid item xs={12} md={6} lg={4}>
      <SalesCard/>
    </Grid>
    {/* <Grid item xs={6} md={3}>
    <SalesCard/>
    </Grid> */}
  </Grid>
  )
}

export default ShopingCard