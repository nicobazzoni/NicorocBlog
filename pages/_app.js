import React, { useEffect, useState } from 'react'
import { Layout } from '../components'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import ReactPlayer from "react-player"
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      
       <div className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed ">
       
      <ReactPlayer
      url="https://soundcloud.com/nicoroc"
      />
      </div>
       
       <Component {...pageProps} />

       
    </Layout>

    
  )

  
}



export default MyApp
