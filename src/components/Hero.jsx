import React from 'react'
import { motion } from 'framer-motion'
export default function Hero(){
  return (
    <motion.section className="bg-white  dark:bg-gray-800 rounded-xl p-8 shadow-md flex flex-col md:flex-row items-center" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}}>
      <div className="flex-1">
        <h1 className="text-3xl font-extrabold text-primary">Experience the Best Coffee in Town</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3">Single-origin beans, expertly roasted. Cozy vibe, friendly baristas.</p>
        <div className="mt-4 flex gap-3">
          <a href="/products" className="px-4 py-2 bg-primary text-white rounded-md">See Products</a>
          <a href="/contact" className="px-4 py-2 border rounded-md">Contact Us</a>
        </div>
      </div>
      <div className="w-full md:w-1/3 mt-4 md:mt-0">
        <img src="/src/public/ice.jpg" alt="hero" className="rounded-md w-full h-56 object-cover"/>
      </div>
    </motion.section>
  )
}
