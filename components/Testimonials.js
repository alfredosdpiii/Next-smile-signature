import React from 'react'
// import YoutubeEmbed from "./YoutubeEmbed";
// import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'

const Testimonials = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  return (
    <div id="testimonials" className='flex flex-col justify-evenly h-screen w-screen'>
      <div>
        <h1 className='heading-1 text-center text-2xl sm:text-8xl'>One smile at a time.</h1>
        <h3 className='heading-1 text-center text-lg sm:text-4xl'>These are their testimonies.</h3>
      </div>
      <div className='flex justify-evenly w-full flex-wrap gap-16'>
        {isTabletOrMobile ? <>
          <iframe src='https://www.youtube.com/embed/QFxMe8kCd3w'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
            width='280px'
            height='180px'
          />
          <iframe src='https://www.youtube.com/embed/YX8Io5GK7ik'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
            width='280px'
            height='180px'
          />
        </>
          : <>
            <iframe src='https://www.youtube.com/embed/QFxMe8kCd3w'
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
              width='640px'
              height='320px'
            />
            <iframe src='https://www.youtube.com/embed/YX8Io5GK7ik'
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
              width='640px'
              height='320px'
            />
          </>
        }

      </div>

    </div>
  )
}

export default Testimonials
