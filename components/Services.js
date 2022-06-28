import React from 'react'
import Image from 'next/image'
import tech from '../public/tech.jpg'
import bond from '../public/bonding.jpg'
import white from '../public/whitening.jpg'
import crown from '../public/crowns.jpg'
import bridge from '../public/bridges.jpg'
import inlayonlay from '../public/inlayonlay.jpg'
import implant from '../public/implants.jpg'
import ortho from '../public/orthodonics.jpg'

export const Card = (props) => {
  return(
    <div>
      <Image src={props.src} width="2000px" height="1500px" alt="props.alt" objectFit='contain' layout='responsive'/>
      <h4 className='paragraphs text-center text-xs sm:text-3xl font-extralight text-white'>{props.title}</h4> 
    </div>
  )
}
const Services = () => {
  return (
    <div className='w-screen h-screen flex justify-evenly items-center relative animate-[slide_4s_ease-in-out] flex-col bg-black' id='services'>
    <h1 className='heading-1 text-xl sm:text-7xl text-white'>Services we offer.</h1>
      <div className='w-8/12 h-8/12 grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-8'>
        <Card src={tech} alt={'Picture of x-ray'} title={'X-Ray'}/>
        <Card src={bond} alt={'Picture of bond'} title={'Bonding'}/>
        <Card src={white} alt={'Picture of teeth whitening'} title={'Whitening'}/>
        <Card src={crown} alt={'Picture of dental crowns'} title={'Crowns'}/>
        <Card src={bridge} alt={'Picture of dental bridges'} title={'Bridges'}/>
        <Card src={inlayonlay} alt={'Picture of dental inlays/onlays'} title={'Inlays / Onlays'}/>
        <Card src={implant} alt={'Picture of dental implants'} title={'Implants'}/>
        <Card src={ortho} alt={'Picture of dental orthodonics'} title={'Orthodonics'}/>
      </div>
    </div>
  )
}

export default Services
