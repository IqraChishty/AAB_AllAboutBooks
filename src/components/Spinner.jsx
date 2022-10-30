import React from 'react'
import loading from '/assets/iconsLogos/loading.gif'

const Spinner = () => {
  return (
    <>
    <div className='flex container items-center justify-center m-auto my-10'>
      <img className="" src={loading} alt='loading'/>
    </div>
    </>
  )
}

export default Spinner
