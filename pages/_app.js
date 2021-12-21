import React, { useEffect, useState } from 'react'
import { Layout } from '../components'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import ReactPlayer from "react-player"


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div> </div>
        <Component {...pageProps} />

        

         <div className="place-content: space-evenly place-content: space-around">
           <h1 className="cursor-pointer text-5xl text-white font-Helvetica hover:font-Arial "> Music </h1>
            
            <ReactPlayer 
            
            url="https://soundcloud.com/nicoroc?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
             config ={{
              soundcloud: {
                options: { 
                  sharing: true,
                  show_artwork: false
                }
              }
            }}
            />
        </div>
    
    <div>
    <ReactPlayer url= "https://youtu.be/HUrozLCR2Ks" />
    <ReactPlayer url="https://youtu.be/2_IHkX93Qm0" />
    </div>
    
    </Layout>

    
  )

  
}



export default MyApp
