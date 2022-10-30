import React, { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
import emailjs from '@emailjs/browser';
import loading from '/assets/iconsLogos/spinner.svg'

const Contact = () => {
  const [successAlert, setsuccessAlert] = useState(false)
  const [failAlert, setFailAlert] = useState(false)
  const [btnDisable, setBtnDisable] = useState(false)
  const form = useRef()

  useEffect(()=>{
    document.title= "AAB | Contact Us"
  })

  const submitSuccess = (e) => {
    setsuccessAlert(true)
    setFailAlert(false)
    e.target.reset();
    setBtnDisable(false)

    setTimeout(() => {
      setsuccessAlert(false)
    }, 3000)
  }

  const submitFailed = (e) => {
    setFailAlert(true)
    setsuccessAlert(false)
    e.target.reset();
    setBtnDisable(false)

    setTimeout(() => {
      setFailAlert(false)
    }, 3000)
  }

  // Validate user_name field to accept only alphabets
  const handleUserNameChange = (e) => {
    if (/[^A-Za-z ]/.test(e.target.value)) {
      document.getElementById('user_name').setAttribute('pattern', '')} 
      else {
      document.getElementById('user_name').removeAttribute('pattern')} 
    }

  const sendReview = (e) => {
    try {
      e.preventDefault();
      setBtnDisable(true) //disable submit button 

      emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
          if (result.text === 'OK') { submitSuccess(e) }

        }, (error) => {
          submitFailed(e)
        });

    } catch (error) {
      submitFailed(e);
    }
  }

  return (
    <>
      <Header bgUrl='bg-[url("/assets/images/contact-us.jpg")]' viewportHeight="min-h-[70vh]">
      </Header>

      <div className='max-w-[80%] font-LibreBaskerville text-center border-b-[0.19rem] border-primary text-4xl mt-10 py-4  mx-auto'>Contact Us</div>
      <br /><br />

      {successAlert &&
        <div className="z-20 fixed top-0 left-[12%] right-[12%] my-7 rounded-lg border-2  p-3 bg-green-100 text-green-500 border-green-500">Submitted successfully! An email has been sent to your provided email address.</div>}
      {failAlert &&
        <div className="z-20 fixed top-0 left-[12%] right-[12%] my-7 rounded-lg border-2  p-3 bg-red-100 text-red-500 border-red-500">Something went wrong! Refresh the page and try to submit again.</div>}

      <div className="flex flex-col gap-10 md:flex-row-reverse px-10 pb-20 xs:px-16 sm:px-28 xl:gap-20 xl:px-40">

        <img src='https://images.pexels.com/photos/4153146/pexels-photo-4153146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='object-cover w-full md:max-w-[40%] lg:max-w-[50%]'></img>

        <form ref={form} name="contactForm" className='flex flex-col gap-5 pb-10 w-[100%] ' onSubmit={sendReview}>

          <label htmlFor='user_name' className='font-Arima text-xl'>Name</label>
          <input onChange={handleUserNameChange} type='text' id='user_name' name='user_name' title='Only alphabets are allowed' required minLength="3" className='border-2 focus:outline-none text-lg p-1  focus:invalid:border-red-500 focus:border-primary rounded-md' />

          <label htmlFor='user_email' className='font-Arima text-xl'>Email</label>
          <input type='email' id='user_email' name='user_email' required className='border-2 focus:outline-none text-lg p-1 focus:border-primary rounded-md focus:invalid:border-red-500' />

          <label htmlFor='user_review' className='font-Arima text-xl'>Message</label>
          <textarea id='user_review' name='user_review' required minLength="15" className='w-[100%] h-36 text-lg p-1 border-2 focus:outline-none  focus:border-primary rounded-md focus:invalid:border-red-500' />

          <button type="submit" disabled={btnDisable} className='flex items-center justify-center text-2xl disabled:bg-gray-300 bg-primary text-secondary hover:bg-btnHover py-3 px-8 mt-3'>Submit  {btnDisable && !successAlert && <img src={loading} className="mx-3 animate-spin" />}</button>

        </form>

      </div>

    </>
  )
}

export default Contact