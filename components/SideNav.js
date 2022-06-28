import React from 'react'
import styles from '../styles/SideNav.module.css'
import {useScrollPosition} from '../utils/useScrollPosition.js'

const NavItem = props => (
  <li className="px-2 py-1">
    <a className="text-2xl font-light px-8 py-2 hover:text-blue-500 navigation-links" href={props.href}>
      {props.text}
    </a>
  </li>
)

function classNames(...classes){
  return classes.filter(Boolean).join(' ')
}

const SideNav = () => {
  const scrollPosition = useScrollPosition()
  return (
    <div className={classNames(scrollPosition > 0 ? `${styles.navigation} z-10 text-purple-300 hidden sm:block` : `${styles.navigation} z-10} hidden sm:block`)}>
      <ul className="flex flex-col">
        <NavItem text="About" href="#about" />
        <NavItem text="Services" href="#services"/>
        <NavItem text="Testimonials" href="#testimonials"/>
        <NavItem text="Contact" href="#contact"/>
      </ul>
    </div>
  )
}

export default SideNav
