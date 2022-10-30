import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { menu, categories, collecion } from '../assets/data/data';
import logo from "/assets/iconsLogos/logo-lg.png"
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    let location = useLocation();

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    },[location])

    return (
        <>

            <footer className='text-secondary  bg-primaryLight break-words py-3'>
                <div className='flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  pt-6 px-6 max-w-full '>
                    <div className='max-w-full'>
                        <Link to='/' className='cursor-pointer'><img className=' max-w-full' src={logo}></img></Link>
                        <br />
                        <p >info@all_about_books.com <br /> +0 000-000-0000</p>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <h5 className='font-semibold text-lg'>Categories</h5>
                        {categories.map((categoryItem, index) => {
                            return (
                                <Link key={index} to={categoryItem.link} className=''>{categoryItem.name}</Link>
                            )
                        })}

                    </div>

                    <div className='flex flex-col gap-2 '>
                        <h5 className='font-semibold text-lg'>Featured Collections</h5>
                        {collecion.map((collectionItem, index) => {
                            return (
                                <Link key={index} to={collectionItem.link}>{collectionItem.name}</Link>
                            )
                        })}
                    </div>

                    <div className='flex flex-col gap-1'>
                        <Link to={menu[1].link}><h5 className='font-semibold text-lg'>{menu[1].name}</h5></Link>
                        <Link to={menu[3].link}><h5 className='font-semibold text-lg'>{menu[3].name}</h5></Link>
                    </div>
                </div>

                <br /> 

                <div className='flex gap-1 items-center justify-center'>
                    <FaRegCopyright />
                    <small className='py-3'>copyright {new Date().getFullYear()} AAB</small>
                </div>
            </footer>
        </>
    )
}

export default Footer
