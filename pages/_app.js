import React, { useEffect, useState } from 'react'
import { Layout } from '../components'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import ReactPlayer from "react-player"


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      
        <Component {...pageProps} />

        

         <div className="place-content: space-evenly place-content: space-around">
           <h1 className="cursor-pointer text-5xl text-white font-Helevetica hover:font-Arial "> Music </h1>
            <ReactPlayer 
            
            url="https://soundcloud.com/nicoroc/tracks"
            show_artwork="false" 
            />
        </div>
    
    
    </Layout>

    
  )

  
}



export default MyApp
