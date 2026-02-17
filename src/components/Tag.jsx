import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;


const Tag = () => {
  const [gif, setGif] = useState('')
  const [loading, setLoading] = useState('false')

  async function fetchData()
    {
      setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data}=await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false)

  }
  useEffect(()=>{
    fetchData();
  },[])

  function clickHandler(){
    fetchData();
  }
  return (
    <div className= ' w-1/2 h-[450px] gap-y-5 mt-[15px] bg-blue-400 rounded-lg border border-black flex flex-col items-center '>
      <h1 className='mt-[15px] underline font-bold text-2xl uppercase'>A Random Gif</h1>
     
     {
      loading? (<Spinner/>): (<img src={gif} alt=""/>)
     }
      

      <button className='w-10/12 bg-yellow-500 text-lg rounded-lg py-2 opacity-80 mb-[20px] '
      onClick={clickHandler}>
        Generate
      </button>
    </div>
  )
}

export default Tag