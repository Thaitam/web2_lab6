import React from 'react'


const Hero = () => {
  const HeroBanner = 'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/s23-ultra-gai-cuoi-th10-newww.png'
  return (
    <div className='container flex flex-wrap mt-7 mb-7'>
      <div className='w-1/2 flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold'>Welcome to Cellphones.com.vn</h1>
        <p className='text-xl'>Best products for you</p>
      </div>
      <div className='w-1/2'>
        <img src={HeroBanner} alt="hero" className='w-full'/>
      </div>
    </div>
  )
}

export default Hero