import Head from 'next/head'

import MainLayout from '@/layouts/MainLayout'

import { Box, Container, Typography } from '@mui/material';

import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { UserApi } from '@/api';
import { setUserData } from '@/redux/slices/user';
import { wrapper } from '@/redux/store';


export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Container>
          <Box sx={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography align='center' sx={{ fontSize: "100px" }}>
              FunPlanet Page
            </Typography>
          </Box>
        </Container>
      </MainLayout>
    </>
  )
}


// export const getServerSideProps:GetServerSideProps = wrapper.getServerSideProps(store => async ctx=>{  
//   try {
//     const {token} = parseCookies(ctx);
//     //console.log(token,"token");
    
//     const userData = await UserApi.getme(token);
//     store.dispatch(setUserData(userData));
    
//     return {props:{}};
//   } catch (error) {
//     //console.log(error);
//     return {props:{}};
//   }
 
// });