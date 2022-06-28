import React from 'react'
import YouTube from 'react-youtube';

const Testimonials = () => {
  return (
    <div id="testimonials" className='flex flex-col justify-evenly h-screen w-screen'>
      <div>
        <h1 className='heading-1 text-center text-8xl'>One smile at a time.</h1>
        <h3 className='heading-1 text-center text-4xl'>These are their testimonies.</h3>
      </div>
      <div className='flex justify-evenly w-full flex-wrap gap-16'>
        <YouTube
          videoId="QFxMe8kCd3w"
        />
        <YouTube
          videoId="YX8Io5GK7ik"
        />
      </div>

    </div>
  )
}

export default Testimonials
