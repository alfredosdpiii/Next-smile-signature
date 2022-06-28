import React from "react"

const Header = () => {
  return (
    <nav className="flex w-full bg-transparent justify-between py-4 px-12 sticky top-0 z-10">
      <a className="heading-1 sm:text-3xl p-4 text-xs">
        Smile Signature
      </a>
      
      <button className="rounded-full text-green-400 sm:text-black sm:bg-green-200  font-light text-xs p-5 sm:p-4 sm:text-xl">Schedule Appointment</button>
    </nav>
  )
}

export default Header
