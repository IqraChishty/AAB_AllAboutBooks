import React from 'react'
import { useEffect} from 'react'
import Header from '../components/Header'

const Error = () => {

  useEffect(()=>{
    document.title= "AAB | Error"
  })


  return (
    <div >
       <Header bgUrl='bg-[url("/assets/images/error.jpg")]' viewportHeight="min-h-[70vh]">
      </Header>

      <div className='max-w-[80%] font-LibreBaskerville text-center border-b-[0.19rem] border-primary text-lg xs:text-4xl mt-10 py-4 mx-auto'>Page Not Found</div>
      <br /><br />
      
    </div>
  )
}

export default Error
