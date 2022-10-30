import React from 'react'
import { useState } from 'react'
import spinner from '/assets/iconsLogos/imgLoader.gif'

const BookItem = (props) => {
  
  const {coverID,title,publishedYear,author,readUrl} = props
  const [loader,setLoader]= useState(true) 

  return (
    <>
    <div className="flex flex-col max-w-[200px] ">
        <img src={`${loader ? spinner: coverID ==="N/A"?'https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png':`https://covers.openlibrary.org/b/id/${coverID}-L.jpg`}`} onLoad={()=>{setLoader(false)}} className={` mb-3 border-2 object-cover h-80`}></img>
        
        <div >
            
            <h4 className='xs:text-xl font-LibreBaskerville font-semibold h-[4rem]'>{title.length>22?title.substr(0,22).concat("..."):title}</h4>
            <h6 className='text-base text-gray-600'>{author.length>20?author.substr(0,20).concat("..."):author}</h6>
            <small >First published in {publishedYear}</small>
            <br/><br/>
        </div>
        <a href={readUrl} target="_blank" className='bg-primary text-center text-secondary font-medium hover:bg-btnHover min-w-full py-2'>Read</a>
    
    </div>
      
    </>
  )
}

export default BookItem
