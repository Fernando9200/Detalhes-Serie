import React from 'react';
import { useEffect, useState } from 'react';
import Seasons from './Seasons';
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './Layout';
import useFetch from './useFetch'
import Footer from './Footer'
import '../Styles/Home.css';

export default function Home() {

  const [data,loading,error] = useFetch('https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json')


  return (
    <Layout> 
            <h1 className="title" style={{color: 'white'}}>
                {data?.Title}
            </h1>
            <p className="subtitle" style={{color: 'white'}}>80% INDICADO / CIENCIA FICCIÓN / {data?.Year} / EUA / 14</p>
            <div id="container3">
            <Seasons/>
            </div>
            <Footer data={data}/>         
    </Layout>
  );
}