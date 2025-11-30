import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMoon, FiSun, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useCartState } from '../state/CartContext'

export default function Navbar({dark, setDark}) {
  const {items} = useCartState()
  const qty = items.reduce((s,i)=>s+i.qty,0)

  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    {to:'/', name:'Home'},
    {to:'/products', name:'Products'},
    {to:'/offers', name:'Offers'},
    {to:'/about', name:'About'},
    {to:'/testimonials', name:'Testimonials'},
    {to:'/contact', name:'Contact'},
  ]

  return (
    <motion.header
      initial={{y:-20,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:0.5}}
      className="bg-white dark:bg-gray-800 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-md text-white flex items-center justify-center font-bold">R&B</div>
          <div className="font-bold text-primary dark:text-amber-300">Roast & Brew</div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              className={({isActive}) =>
                `relative text-gray-700 dark:text-gray-200 font-medium hover:text-primary transition-colors ${
                  isActive ? 'text-primary font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={()=>setDark(!dark)}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-md border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {dark ? <FiSun/> : <FiMoon/>}
          </button>

          <NavLink to="/cart" className="relative" aria-label="Cart">
            <FiShoppingCart className="text-xl"/>
            {qty>0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{qty}</span>
            )}
          </NavLink>

          {/* Hamburger Menu Icon */}
          <button
            className="md:hidden p-2 ml-2 rounded-md border hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={()=>setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <FiX className="text-xl"/> : <FiMenu className="text-xl"/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 px-4 py-4 flex flex-col gap-4">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              onClick={()=>setMenuOpen(false)}
              className={({isActive}) =>
                `text-gray-700 dark:text-gray-200 font-medium hover:text-primary transition-colors ${
                  isActive ? 'text-primary font-semibold' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </motion.header>
  )
}
