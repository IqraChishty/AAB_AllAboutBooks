import React, { useRef, useState, useEffect} from 'react'
import Spinner from '../components/Spinner'
import BookItem from '../components/BookItem'
import Header from '../components/Header'

const Category = (props) => {
  const { category } = props

  
  const [books,setBooks]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalPages,setTotalPages]=useState(1) 
  const [errorMessage,setErrorMessage]=useState(null) 
  const [callUseEffect, setCallUseEffect]=useState(0) 
  
  let abortController = useRef(null)
  let observerInstance =useRef(null)

  useEffect(()=>{
    
    document.title = `AAB | ${category.name}`
    fetchData(1)
    
    return()=>{ 

      cancelFetchRequest()
      setLoading(true)
      setBooks([])    
      setPage(1)
      setErrorMessage(null)
    }

  },[category.query,callUseEffect])

  const cancelFetchRequest = ()=>{
    if(abortController.current){
      abortController.current.abort()
    }
  }

  const fetchData = async(pageNumber)=>{
    setLoading(true)
    abortController.current = new AbortController()

    let url=`https://openlibrary.org/search.json?${category.query}&page=${pageNumber}`

    try {
      
      let response = await fetch(url,{
        signal:abortController.current.signal})

      let parsedData = await response.json()   
           
      if(pageNumber===1){
        
        if(parsedData.numFound === 0 ){
          setCallUseEffect((prevNumber)=>{prevNumber+1})
          setLoading(true)  
        }
        setBooks(()=>{
          return [...parsedData.docs]
        })     
        let pages = Math.ceil(parsedData.numFound/100)
        setTotalPages(pages)     
      }
      else if(pageNumber>1){
        setBooks((prevBooks)=>{
          return [...prevBooks,...parsedData.docs]
        })   
      }
      setLoading(false)

   } catch (error) {
     if(error.name === "AbortError"){
      setLoading(true)    
    }else{
      setLoading(false)
      setErrorMessage("Something went wrong! Please refresh the page and try again.")     
      }
    }
  }

  let LastElementFunction=(node)=>{   
    if(observerInstance.current) observerInstance.current.disconnect()
    if (loading) return
    if(page>totalPages) {return}
   
    observerInstance.current = new IntersectionObserver((enteries)=>{
      if(enteries[0].isIntersecting && (page<=totalPages)){
        setPage(prevPageValue => prevPageValue + 1)
        if(page != 1){
          fetchData(page)
        }
      }
    }) 

    if(node) observerInstance.current.observe(node)
  }

  return (
    <>
    
      <Header bgUrl={category.coverImg} viewportHeight="min-h-[70vh]" >
        <div className='max-w-[80%] lg:max-w-[48%] px-3'>
          <h3 className={`text-center font-Arima text-xl text-secondary sm:text-2xl xl:text-3xl `}> {category.quote}</h3>
          <h5 className='text-center font-IndieFlower text-primary xl:text-2xl  '>{category.quoteAuthor}</h5>
        </div>
      </Header>

      <div className='max-w-[80%] font-LibreBaskerville text-center border-b-[0.19rem] border-primary text-lg xs:text-4xl mt-10 mx-auto'>{category.name}</div>
     
      {!loading && <div className='max-w-[80%] text-center text-md xs:text-3xl mt-10 mx-auto'>{errorMessage}</div>}
    
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 m-12 xs:m-20  gap-10'>
       
        {books.map((book,index)=>{return(
          books.length===index+1?
          <div key={index} ref={LastElementFunction} className='flex items-center justify-center'>
            <BookItem title={book.title?book.title:"N/A"} coverID={book.cover_i?book.cover_i:"N/A"} publishedYear={book.first_publish_year?book.first_publish_year:"N/A"} author={book.author_name?book.author_name.toString():"N/A"} readUrl={book.key?`https://openlibrary.org/${book.key}`:""}/>
          </div>
          :<div key={index} className='flex items-center justify-center'>
            <BookItem title={book.title?book.title:"N/A"} coverID={book.cover_i?book.cover_i:"N/A"} publishedYear={book.first_publish_year?book.first_publish_year:"N/A"} author={book.author_name?book.author_name.toString():"N/A"} readUrl={book.key?`https://openlibrary.org/${book.key}`:""}/>
          </div>
        )})}
        {loading && <div className='col-span-1 xs:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 xxl:col-span-6'><Spinner/></div>}
      </div>
    </>
  )
}

export default Category
