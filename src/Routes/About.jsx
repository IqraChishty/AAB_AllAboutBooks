import React from 'react'
import { useEffect } from 'react'
import Header from '../components/Header'

const About = () => {
  useEffect(()=>{
    document.title= "AAB | About Us"
  })
  return (
    <div>

      <Header bgUrl='bg-[url("/assets/images/about-us.jpg")]' viewportHeight="min-h-[70vh]">
      </Header>

      <div className='max-w-[80%] font-LibreBaskerville text-center border-b-[0.19rem] border-primary text-4xl mt-10 py-4 mx-auto'>About Us</div>


      <div className="flex flex-col md:grid grid-rows-2 grid-cols-2 lg:grid-cols-10 gap-10 lg:gap-20 my-5 p-7 xs:p-12 sm:p-20  lg:px-32 ">

        <div className='flex flex-col gap-5 lg:col-span-4 lg:gap-10 pt-3'>
          <h1 className='capitalize text-center text-3xl xs:text-4xl font-LibreBaskerville'>Our<span className='font-semibold text-primary'> Mission</span></h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet similique, aliquid recusandae culpa rem magni odio cupiditate dignissimos possimus ab nihil! Eaque officiis perspiciatis impedit itaque enim labore nostrum!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet similique, aliquid recusandae culpa rem magni odio cupiditate dignissimos possimus ab nihil! Eaque officiis perspiciatis impedit itaque enim labore nostrum!</p>
        </div>

        <img src='https://images.pexels.com/photos/309724/pexels-photo-309724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='min-h-full object-cover lg:col-span-6'></img>

        <div className='flex flex-col gap-5 md:order-last lg:col-span-4 lg:gap-10 pt-3'>
          <h1 className='capitalize text-center text-3xl xs:text-4xl font-LibreBaskerville'>Our<span className='font-semibold text-primary'> Vision</span></h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet similique, aliquid recusandae culpa rem magni odio cupiditate dignissimos possimus ab nihil! Eaque officiis perspiciatis impedit itaque enim labore nostrum!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet similique, aliquid recusandae culpa rem magni odio cupiditate dignissimos possimus ab nihil! Eaque officiis perspiciatis impedit itaque enim labore nostrum!</p>
        </div>
        
        <img src='https://images.pexels.com/photos/159544/books-reading-study-literature-159544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='min-h-full object-cover lg:col-span-6'></img>


      </div>
    </div>
  )
}

export default About
