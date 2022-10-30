import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import { categories, collecion } from '../assets/data/data';
import imgLoader from '/assets/iconsLogos/imgLoader.gif'
import Slider from '../components/Slider';
import Header from '../components/Header';
import Spinner from '../components/Spinner'

const Home = () => {
    const [loading,setLoading]=useState(true)
    const [trendingBooks,setTrendingBooks]=useState([])
    const [randomBook,setRandomBook]=useState({})
    const [errorMessage,setErrorMessage]=useState(null) 
    const [randBookImage,setRandBookImage]=useState(true) 
    const [trendingNowImg,setTrendingNowImg]=useState(true) 
    let abortController = useRef(null)

    useEffect(()=>{
        document.title= "AAB | Home"      
        fetchTrendingNow();

        return()=>{ 
            cancelFetchRequest()
          }

    },[])

    const cancelFetchRequest = ()=>{
        
        if(abortController.current){
          abortController.current.abort()
        }
      }

    const fetchTrendingNow = async()=>{
        
        abortController.current = new AbortController()
        setLoading(true)
        let url=`https://openlibrary.org/trending/now.json`    
        try {       
          let response = await fetch(url, { method: "GET", headers: {}, signal:abortController.current.signal})
          let parsedData = await response.json() 
          var array = parsedData.works.filter((work)=>{
            return (work.cover_i && work.title && work.key && work.author_name && work.first_publish_year && work.edition_count)
          })

          array = [... new Set(array)]
          console.log(array)
          setTrendingBooks(array.slice(30,42))
          setRandomBook(array[3]) 
          setLoading(false) 
       } catch (error) {
          setLoading(false)
          if(array === undefined)
          {setErrorMessage("Something went wrong! Please refresh the page and try again.")}
        }    
      }


return (
<>

<Header bgUrl='bg-[url("/assets/images/cover-image.jpg")]' viewportHeight='min-h-[100vh]' >
    <div className='flex flex-col items-center text-secondary py-6 px-[3rem] md:px-[7rem]'>
        <h1 className='text-7xl font-semibold'>AA<span className='text-primary'>B</span></h1>
        <h5 className='py-3 text-lg text-center'>All About Books</h5>
        <h2 className='py-3 text-center uppercase text-3xl font-semibold'>Your <span className='text-primary'>Online</span> Book Browser</h2>
        <h3 className='lg:px-[6rem] py-3 text-center text-xl '>Browse <span className='uppercase font-semibold  text-primary '>unlimited </span>amount of books in Science and Mathematics, Business, health and wellness, Business and Finance, Animal and Children.</h3>
    </div>
</Header>

{/* Category Slider */}
<section className='flex flex-col items-center  gap-10 py-10'>
    <h1 className='capitalize text-center text-2xl sm:text-3xl lg:text-4xl font-LibreBaskerville mx-5'>Browse books in your <span className='font-semibold text-primary'>desired</span> category</h1>
    <Slider sliderId="categorySlider">
        {categories.map((categoryItem, index) => {
            return (
                <Link to={categoryItem.link} key={index} className='bg-primaryLight block h-[200px] hover:scale-90 ease-in-out duration-500'>
                    <div className="flex flex-col items-center justify-center px-5 py-3">
                        <img src={`${categoryItem.srcLogo}`} alt={`Logo`} className='p-2 h-24' />
                        <p className='text-white text-xl font-Arima font-semibold p-3 whitespace-pre-wrap text-center'>{categoryItem.name}</p>
                    </div>
                </Link>
            )
        })}
    </Slider>
</section>

{/* Random Pick*/}
<section className='flex flex-col items-center bg-blue-50  gap-10 py-10 px-6 xs:px-20 sm:px-16 '>
    <h1 className='capitalize text-center text-2xl sm:text-3xl lg:text-4xl font-LibreBaskerville mx-5 '>Random Pick For<span className='font-semibold text-primary'> You</span></h1>
    {!loading && (errorMessage === null) &&
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 px-10 sm:px-0 sm:gap-10 lg:gap-20">

        <a href={`https://openlibrary.org/${randomBook.key}`} target="_blank" className='flex  sm:col-span-2 cursor-pointer justify-self-center self-center h-full hover:scale-90 duration-500 ease-in-out max-w-[327px]'>
            <img src={`${randBookImage?imgLoader:`https://covers.openlibrary.org/w/id/${randomBook.cover_i}-L.jpg`}`} alt='Book Cover' onLoad={()=>{setRandBookImage(false)}} className={`bg-gray-50 min-h-full object-cover`} />
        </a>
            
        <div className='sm:col-span-2 flex flex-col  gap-3 md:gap-10 lg:gap-10 max-w-[327px]'>
            <div className='flex flex-col gap-3 w-full'>
                <p className='text-lg text-gray-700'>{randomBook.author_name?randomBook.author_name.toString():"N?A"}</p>
                <h1 className='text-3xl md:text-5xl font-Arima capitalize'>{randomBook.title}</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 min-w-full">
                <a href={`https://openlibrary.org/${randomBook.key}`} target="_blank" className='text-center cursor-pointer p-6 sm:p-3 border-2 border-primary text-primary hover:text-btnHover hover:border-btnHover '>Want to Read</a>
                <a href={`https://openlibrary.org/${randomBook.key}`} target="_blank" className='text-center cursor-pointer p-6 sm:p-3 bg-primary text-secondary hover:bg-btnHover '>Borrow</a>
            </div>
            <h2 className='text-lg'>First published in: {randomBook.first_publish_year}</h2>
            <div>No of Editions: {randomBook.edition_count}</div>
        </div>

    </div>}
    {loading && <div className=''><Spinner/></div>}
    {!loading && <div className='max-w-[80%] text-center text-md xs:text-2xl  mx-auto'>{errorMessage}</div>}
</section>

{/* Trending Now */}
<section className='flex flex-col items-center gap-10 py-10'>
    <h1 className='capitalize text-center text-2xl sm:text-3xl lg:text-4xl font-LibreBaskerville mx-5'>Trending<span className='font-semibold text-primary'> NOW</span></h1>
    {!loading && (errorMessage === null) && <Slider sliderId="trendingNowSlider">
        {trendingBooks.map((bookItem, index) => {
            return (
                <a href={`https://openlibrary.org/${bookItem.key}`} target="_blank" key={index} className='w-[200px]'>
                    <img src={`${trendingNowImg?imgLoader:`https://covers.openlibrary.org/w/id/${bookItem.cover_i}-L.jpg`}`} alt="book cover" onLoad={()=>{setTrendingNowImg(false)}} className='w-[200px] h-[300px] object-cover hover:scale-90 ease-in-out duration-500 border-[1px] border-gray-300' />
                    <div className='overflow-hidden w-[200px] text-lg font-LibreBaskerville'>{bookItem.title.length<17?bookItem.title:bookItem.title.substr(0,16).concat("...")}</div>
               
                </a>
            )
        })}
    </Slider>}
    {loading && <div className=''><Spinner/></div>}
    {!loading && <div className='max-w-[80%] text-center text-md xs:text-2xl mx-auto'>{errorMessage}</div>}
</section>

{/* Featured Collections*/}
<section className=' flex flex-col items-center justify-center bg-blue-50 gap-10 py-10 px-6 xs:px-20 '>
    <h1 className='capitalize text-center text-2xl sm:text-3xl lg:text-4xl font-LibreBaskerville mx-5'>Featured<span className='font-semibold text-primary'> Collections</span></h1>
    <div className='w-full  items-center grid justify-center xs:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-5 px-10 xs:px-0 sm:px-10 pb-16 lg:px-20 xl:px-36'>
        <Link to={collecion[0].link} className='justify-self-center hover:scale-90 duration-500 ease-in-out min-w-full min-h-full xs:col-span-2 md:col-span-2 md:row-span-2'><img src={collecion[0].imgUrl} className='min-w-full min-h-full object-cover' /></Link>
        <Link to={collecion[1].link} className='justify-self-center hover:scale-90 duration-500 ease-in-out'><img src={collecion[1].imgUrl} /></Link>
        <Link to={collecion[2].link} className='justify-self-center hover:scale-90 duration-500 ease-in-out'><img src={collecion[2].imgUrl} /></Link>
        <Link to={collecion[3].link} className='justify-self-center hover:scale-90 duration-500 ease-in-out'><img src={collecion[3].imgUrl} /></Link>
        <Link to={collecion[4].link} className='justify-self-center hover:scale-90 duration-500 ease-in-out'><img src={collecion[4].imgUrl} /></Link>
    </div>
</section>

 {/* Review */}
<section className='flex flex-col  gap-10 py-10 items-center text-center px-2 '>
<h1 className='capitalize text-center text-2xl sm:text-3xl lg:text-4xl font-LibreBaskerville mx-5'>Wanna<span className='font-semibold text-primary'> Contact</span> Us?</h1>
<p className='text-gray-600 text-lg'>Feel free to share your suggesstions, comments or reviews with us.</p>
<Link to="/contact-us"><img src='/assets/iconsLogos/review.svg' className='w-52 p-10 shadow-md bg-primary rounded-md duration-500 ease-in-out hover:scale-90 '></img></Link>

</section>

</>
)
}

export default Home
