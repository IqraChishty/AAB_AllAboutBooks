import React from 'react'
import PropTypes from 'prop-types' 


const Header = (props) => {
    const {bgUrl, viewportHeight} = props

    
    return (
        <div className='bg-black'>
            <div className={`${viewportHeight} bg-cover bg-center ${bgUrl} overflow-x-hidden`}>
                <div className={`${viewportHeight} bg-black bg-opacity-60 flex flex-col items-center justify-center`}>
                    <div className='min-h-[7rem] '></div>
                    {props.children}             
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    bgUrl : PropTypes.string,
    viewportHeight: PropTypes.string

}

Header.defaultProps = {
    bgUrl:'bg-[url("/assets/images/cover-image.jpg")]',
    viewportHeight:"min-h-[50vh]"
}

export default Header
