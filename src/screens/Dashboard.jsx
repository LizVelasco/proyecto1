import React from 'react'
import NavbarAdmin from "../components/navbar/NavbarAdmin";
import {Box, Grid, Card, CardContent, Typography, Stack} from '@mui/material'
import '../styles/Dash.css'
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from '../components/AccordionDash';
import Barchart from '../components/charts/Barchart';

function Dashboard() {
  return (
  <>
    <Box display="grid" gap={2} className='admin'>
      <Box component='main' sx={{flexGrow:1, p:3}}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction='row'>
              <Card sx={{minWidth: 49 + '%', height:150}} className='gradient'>
                <CardContent>
                  <div className='iconstylewhite'>
                    <LocalShippingIcon/>
                  </div>
                  <Typography gutterBottom variant='h5' component='div' sx={{color:'#ffffffff'}}>
                    $120.000
                  </Typography>
                  <Typography variant='body2' color='text.secondary' sx={{color:'#ccd1d1'}}>
                    Gastos de envío
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{minWidth: 49 + '%', height:150}} className='gradientlight'>
                <CardContent>
                  <div className='iconstylewhite'>
                    <ShoppingBagIcon/>
                  </div>
                  <Typography gutterBottom variant='h5' component='div' sx={{color:'#ffffffff'}}>
                    57 libros físicos
                  </Typography>
                  <Typography variant='body2' color='text.secondary' sx={{color:'#ccd1d1'}}>
                    Productos vendidos
                  </Typography>
                </CardContent>
              </Card>
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card className='gradientlight'>
                    <Stack spacing={2} direction='row'>
                      <div className='iconstyle'>
                        <StorefrontIcon/>
                      </div>
                      <div className='paddingall'>
                        <span className='pricetitle'>$126.450</span>
                        <br/>
                        <span className='pricesubtitle'>Venta total por semana</span>
                      </div>
                    </Stack>
                </Card>

                <Card>
                  <Stack spacing={2} direction='row'>
                      <div className='iconstyle'>
                        <StorefrontIcon/>
                      </div>
                      <div className='paddingall'>
                        <span className='pricetitle'>$800.000</span>
                        <br/>
                        <span className='pricesubtitle'>Ingreso total por mes</span>
                      </div>
                    </Stack>
                </Card>

              </Stack>
            </Grid>
          </Grid>

          <Box height={20} paddingTop={5}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{height: 47 +'vh'}}>
                  <CardContent>
                    <Barchart/>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{height: 100 +'vh'}}>
                  <CardContent>
                      <div className='paddingall'>
                        <span className='pricetitle'>Productos populares</span>
                        <br/>
                      </div>
                    <AccordionDash/>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
      </Box>
    </Box>
  </>
  )
}

export default Dashboard