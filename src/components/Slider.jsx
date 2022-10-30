/* Use the slider as react component- 
Max width is 220px per item in the scroll for achieving better responsiveness
 Requirements:
Tailwind CSS must be installed
In-order to hide horizontal scrollbar class "scrollbar-hide" is installed via https://www.npmjs.com/package/tailwind-scrollbar-hide
icons from -> npm install react-icons 

Usage:
For responsiveness, the width of the element inside Slider component must be specified by max-w-[]

 */

import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = (props) => {
  const { sliderId } = props
  const [sliderOffset, setSliderOffset] = useState(222)

  const offset=()=>{
    let windowWidth = window.innerWidth;
    if (windowWidth < 540) {
      setSliderOffset(222)
    } else if (windowWidth < 768) {
      setSliderOffset(444)
    } else if (windowWidth < 992) {
      setSliderOffset(666)
    } else if (windowWidth < 1280) {
      setSliderOffset(888)
    } else {
      setSliderOffset(1110)
    }

  }
  
  // Offset for scrolling depending on the viewport
  useEffect(() => {
    offset();
    const handleResize = () => {
      offset();
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const leftSlide = () => {
    let slider = document.getElementById(sliderId)
    slider.scrollLeft = slider.scrollLeft - sliderOffset
  }
  const rightSlide = () => {
    let slider = document.getElementById(sliderId)
    slider.scrollLeft = slider.scrollLeft + sliderOffset
  }

  return (
    <>
      <div className='flex w-full items-center justify-center px-2'>

        <button className={`text-2xl border-2 border-slate-300 p-1 rounded-full`} onClick={leftSlide} ><FaAngleLeft /></button>

        <div id={`${sliderId}`} className=' max-w-[222px] sm:max-w-[444px] md:max-w-[666px] lg:max-w-[888px] xl:max-w-[1110px] whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide'>
          {props.children.map((child, index) => {
            return (
              <div key={index} className='w-[200px] inline-block cursor-pointer mx-[11px] '>{child}</div>
            )
          })
          }
        </div>
        <button className={`text-2xl border-2 border-slate-300 p-1 rounded-full`} onClick={rightSlide}><FaAngleRight /></button>

      </div>



    </>
  )
}

export default Slider
