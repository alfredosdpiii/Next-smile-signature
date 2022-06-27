import Reat from 'react'
import Image from 'next/image'
import img1 from '../public/beautifulImg.jpg'
import img2 from '../public/beautifulImg3.jpg'

const Hero = () => {
  return (
    <>
    <div className="grid grid-cols-5 top-1/4 mx-4" id="hero">
      <div className="col-span-3 col-start-3 col-end-6 row-span-5">
          <h1 className="heading-1 text-8xl font-medium leading-tight mt-0 mb-2 animate-[slide_2s_ease-in-out]">Improving lives,</h1> 
          <h1 className="heading-1 text-8xl font-medium leading-tight mt-0 mb-2 animate-[slide_3.3s_ease-in-out]">One smile at a time.</h1>
      </div>
    </div>
    <div className="grid grid-cols-10 mx-4 gap-4">
      <div className="col-start-5 col-end-8 animate-[slide_4s_ease-in-out]">
        <Image src={img1} width="2000px" height="1500px" alt="Picture of dental room" className/>
      </div>
      <div className="col-start-8 col-end-11 animate-[slide_4.3s_ease-in-out]">
        <Image src={img2} width="2000px" height="1500px" alt="Picture of dental room"/>
      </div>
    </div>
    </>
  )
}

export default Hero
