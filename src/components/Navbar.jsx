//Note: Dropdown menu opens on hovering over Category menu item. In touch devices hover is converted into focus (i.e tap) but focus only opens the dropdown menu and doesn't close it unless the user tap on the screen/outside area. So functionality to close the dropdown menu by tapping on the category item can be added.

import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import hamburger from '/assets/iconsLogos/hamburger.svg'
import {menu,categories} from '../assets/data/data';
import Logo from './Logo'

const Navbar = () => {
    const [sliderOpen,setSliderOpen]=useState(false)
    const [dropdownOpen,setDropdownOpen]=useState(false)
    const sliderRef= useRef();
    let location = useLocation();

    // close slider by clickling outside
    useEffect(()=>{
      let handlerMouseDown=(e)=>{
        //If target element is not a slider i.e click happen outside of the slider
       if(sliderRef.current === null) {return}
       if(!sliderRef.current.contains(e.target)){ setSliderOpen(false)  }    
        }      
        document.addEventListener("mousedown",handlerMouseDown)
    },[])
       
  return (
    <>
    <nav className='absolute z-10 w-full flex justify-between items-center text-secondary pt-7 px-9 min-h-[6.25rem]'>
       
        {/* Logo */}
        <div className="flex items-center cursor-pointer  max-w-[12rem] md:max-w-[15.625rem]">
            <Link  to="/">
                <Logo/>
            </Link>
        </div>

        {/* Navbar menu items and dropdown menu on large screen*/}
        <ul className='relative hidden lg:flex justify-between'>
            {menu.map((menu,menuIndex)=>{return (
            <li key={menuIndex} className="px-4 lg:px-7 ">          
          {/* For meanu item "categories" i.e menuIndex===2 use anchor tag without href */}
                {menuIndex===2? 
                (<div className='block peer group cursor-pointer py-2' tabIndex="0" >
                    {menu.name}
                {/* dropdown menu start */}   
                    <ul className='absolute top-0 pointer-events-none group-hover:pointer-events-auto opacity-0 -translate-y-3 transition group-hover:opacity-100 group-hover:translate-y-0 mt-10  px-2 py-3 my-3'>
                        {categories.map((category,categIndex)=>{return (
                            <li key={categIndex} className="transition translate-x-0 hover:translate-x-3 py-1">
                                <Link to={category.link}>{category.name}</Link>
                            </li>
                        )})}
                    </ul>
                {/* dropdown menu end */}
                </div>)
                :(<Link className='block peer py-2' to={menu.link} >{menu.name}</Link>)}
                
                {/* bottom line on hover */}
                <div className={`aboslute h-[0.18rem] ${menu.link=== location.pathname?"bg-primaryLight":"bg-transparent"} peer-hover:bg-primaryLight`}></div>
            </li>)})}
        </ul> 

        {/*------------ Mobile nav------ */}

        <button className='lg:hidden ' onClick={()=>{setSliderOpen(true)}}>
            <img src={hamburger} alt='Menu Button' className="max-w-[2.5rem]"/>
        </button>

        {/* Slider */}
        <div ref={sliderRef} className={`z-20 fixed top-0 bottom-0 right-0 h-screen min-w-[90%] xs:min-w-[60%] lg:hidden ${sliderOpen?"translate-x-0":"translate-x-[100%]"}  duration-500  text-secondary bg-black p-5 overflow-scroll`}>
            <button className="text-3xl p-1 font-IndieFlower" onClick={()=>{setSliderOpen(!sliderOpen)}}>X</button>
            <ul className='relative pt-6'>
                {menu.map((menu,menuIndex)=>{return (
                <li key={menuIndex} className="px-4 ">          
                 {/*Menu item "Categories" */}
                    {menuIndex===2? 
                    (<div className='pb-2 relative' tabIndex="0" >
                        <button className='flex items-center' onClick={()=>{setDropdownOpen(!dropdownOpen)}} >
                            <div>{menu.name}</div>
                            <div className={`mx-4 h-2 w-2 border-b-2 border-r-2 ${dropdownOpen?"rotate-[225deg]":"rotate-[45deg]"}  border-white`}></div> 
                        </button>
                    {/* dropdown menu start */}
                        <ul className={`pt-3 px-6 -translate-y-3 opacity-0 transition ease-in-out duration-200 ${dropdownOpen?"translate-y-0 opacity-100 pointer-events-auto":"absolute pointer-events-none"}`}>
                            {categories.map((category,categIndex)=>{return (
                                <li key={categIndex} className="transition translate-x-0 focus:translate-x-3 my-5">
                                    <Link to={category.link} onClick={()=>{setSliderOpen(!sliderOpen);setDropdownOpen(!dropdownOpen)}}>{category.name}</Link>
                                    </li>
                            )})}
                        </ul>
                    {/* dropdown menu end */}
                    </div>)
                    :(<Link className='block peer mb-3 py-1 transition translate-y-0' to={menu.link} onClick={()=>{setSliderOpen(!sliderOpen)}} >{menu.name}</Link>)}
                    
                </li>)})}

            </ul>
        </div>
        
    </nav>
    


    </>
  )
}

export default Navbar
