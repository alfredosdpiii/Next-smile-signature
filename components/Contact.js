import React from 'react'

const Contact = () => {
  return (
    <div className='w-screen h-{128} bg-red-300' id="contact">
      <h1 className='heading-1 text-xl sm:text-7xl text-black text-center py-8'>Contact us</h1>
      <div className='flex flex-row justify-start items-start w-screen h-full px-8'>
        <div className='flex flex-col justify-evenly items-start h-80'>
          <p className='paragraphs text-xs sm:text-2xl break-normal'>
            <a className='cursor-pointer' href='https://www.google.com/maps/dir/?api=1&destination=14.429769082064%2C121.0158866606'>
              2nd Flr. JS Commercial Bldg. Marcos Alvarez cor. Del Nor Subd. 1747 
            </a>
          </p>
          <p className='paragraphs text-xs sm:text-2xl break-normal'>
            <a className='cursor-pointer' href='https://www.google.com/maps/dir/?api=1&destination=14.429769082064%2C121.0158866606'>
              2nd Fl. Tatlonghari Commercial Bldg. 502 Real St. Alabang-Zapote Rd., Almanza Uno 1750 
            </a>
          </p>
        </div>
        <div className='flex flex-row justify-start items-start px-1 sm:px-8'>
          <div className='flex flex-col justify-evenly items-start h-80'>
            <p className='paragraphs text-xs sm:text-2xl'>0949 994 8548, <a href='mailto:smilesignatureph@gmail.com'>smilesignatureph@gmail.com</a></p>
            <p className='paragraphs text-xs sm:text-2xl'>0919 092 8360, <a href='mailto:smilesignatureph@gmail.com'>smilesignatureph@gmail.com</a></p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
