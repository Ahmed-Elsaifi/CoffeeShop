import React from 'react'
import { motion } from 'framer-motion'
export default function ProductCard({item, onAdd}){
  return (
    <motion.article whileHover={{scale:1.03}} data-aos="fade-up" className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex flex-col">
      <img src={item.img} alt={item.name} className="w-full hover:scale-105 transition-all h-44 object-cover rounded-md"/>
      <h3 className="mt-3 font-semibold">{item.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300">{item.desc}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-bold text-primary">${item.price.toFixed(2)}</div>
        <button onClick={()=>onAdd(item)} className="px-3 py-2 bg-primary text-white rounded-md">Add</button>
      </div>
    </motion.article>
  )
}
