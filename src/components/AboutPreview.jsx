import React from 'react'
export default function AboutPreview(){
  return (
    <section className="mt-8 bg-white dark:bg-gray-800 p-6  rounded-xl" data-aos="fade-up">
      <div className="md:flex items-center gap-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-primary">About Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Roast & Brew started as a small cart. We focus on quality and care. we try do our best we neet to make you confortable and enjoy</p>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <img src="/src/public/amr.jpeg"  alt="about" className="rounded-md object-cover w-full h-full"/>
        </div>
      </div>
    </section>
  )
}
