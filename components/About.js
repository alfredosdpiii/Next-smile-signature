import React from 'react'
import Image from 'next/image'
import Link from "next/link"

const About = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center relative mt-12 animate-[slide_4s_ease-in-out]' id='about'>
      <div className='w-full h-full flex justify-center align-middle items-center mx-4 relative'>
        <div className="absolute inset-0">
          <Image
            src='/about.webp'
            alt='picture of dental instruments'
            layout='fill'
            objectFit='contain'
            className='rounded-lg'
          />
        </div>
        <div className="opacity-0 hover:opacity-100 duration-300 ease-out absolute inset-0 z-10 flex justify-center items-center text-8xl text-black bg-white font-bold heading-1 cursor-pointer">
          <Link href="/about/the-full-story">
            <a>
              Read about the full story.
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
