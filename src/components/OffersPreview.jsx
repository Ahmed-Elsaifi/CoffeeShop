import React from 'react'
import { motion } from 'framer-motion'
export default function OffersPreview(){
  const offers = [
    {id:1,title:'Morning Combo',desc:'Espresso + pastry',price:'5.00'},
    {id:2,title:'Afternoon Deal',desc:'Latte + cookie',price:'6.00'},
    {id:3,title:'Iced Special',desc:'Iced coffee duo',price:'7.00'},
  ]
  return (
    <section className="mt-8 bg-gradient-to-r from-white  to-yellow-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
      <h2 className="text-xl font-bold text-primary mb-4">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {offers.map(o=>(
          <motion.div key={o.id} whileHover={{scale:1.03}} data-aos="fade-left" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="font-semibold">{o.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">{o.desc}</p>
            <div className="mt-2 font-bold text-primary">${o.price}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
