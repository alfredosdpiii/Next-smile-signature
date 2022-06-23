import React from 'react'

const NavItem = props => (
  <li>
    <a className="text-lg font-light px-8 py-2 hover:text-blue-500" href={props.href}>
      {props.text}
    </a>
  </li>
)

const SideNav = () => {
  return (
    <div>
      <ul className="flex flex-col">
        <NavItem text="About" href="/the-full-story" />
        <NavItem text="Services" href="/services"/>
        <NavItem text="Testimonials" href="Testimonials"/>
        <NavItem text="Contact" href="Contact"/>
      </ul>
    </div>
  )
}

export default SideNav
