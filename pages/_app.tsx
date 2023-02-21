import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import React from 'react';

import { wrapper } from '@/redux/store';

import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { UserApi } from '@/api';
import { setUserData } from '@/redux/slices/user';



function App({ Component, pageProps }: AppProps) {
  return(
    
      <Component {...pageProps} />
     
  )
   
}
//export default App;
export default wrapper.withRedux(App);
export const getServerSideProps:GetServerSideProps = wrapper.getServerSideProps(store => async ctx=>{  
  try {
    const {token} = parseCookies(ctx);
    //console.log(token,"token");
    
    const userData = await UserApi.getme(token);
    store.dispatch(setUserData(userData));
    
    return {props:{}};
  } catch (error) {
    //console.log(error);
    return {props:{}};
  }
 
});
