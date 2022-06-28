import React from "react"

const Header = () => {
  return (
    <nav className="flex w-full bg-transparent justify-between py-4 px-12 sticky top-0 z-10">
      <a className="heading-1 text-3xl p-4">
        Smile Signature
      </a>
      
      <button className="rounded-full bg-green-200 p-4 text-xl font-light">Schedule Appointment</button>
    </nav>
  )
}

export default Header
