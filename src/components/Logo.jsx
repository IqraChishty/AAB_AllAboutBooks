import React, { useEffect, useState } from 'react'
import logoSm from "/assets/iconsLogos/logo-sm.png"
import logoLg from "/assets/iconsLogos/logo-lg.png"

const Logo = () => {
    const [logoLarge,setLogoLarge]=useState(true)

    useEffect(()=>{
      
      if(window.innerWidth>768) {setLogoLarge(true)}else{setLogoLarge(false)};              
      
          let handlerWindowResize =()=>{
             if(window.innerWidth>768) {setLogoLarge(true)}else{setLogoLarge(false)};              
          }

          window.addEventListener("resize",handlerWindowResize)
  
          return () => {
              window.removeEventListener('resize', handlerWindowResize);
            };
      },[])

  return (
          <img  src={logoLarge?logoLg:logoSm} alt='AAB logo'/>     
  )
}

export default Logo
