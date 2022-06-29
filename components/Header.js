import React, { useState, } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex w-full bg-purple-200 sm:bg-transparent justify-between p-2 sm:py-4 px-12 sticky top-0 z-10">
      <a className="heading-1 sm:text-3xl p-1 sm:p-4 text-xs">
        Smile Signature
      </a>

      <button className="rounded-full text-blue-700 sm:text-black sm:bg-green-200  font-light text-xs p-1 sm:p-4 sm:text-xl">
        <a href="https://calendly.com/borkybork/dental-appointment-1">
          Schedule Appointment
        </a>
      </button>
    </nav>
  )
}

export default Header
