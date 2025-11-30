import React from 'react'
import Hero from '../components/Hero'
import MenuPreview from '../components/MenuPreview'
import OffersPreview from '../components/OffersPreview'
import TestimonialsPreview from '../components/TestimonialsPreview'
import AboutPreview from '../components/AboutPreview'
import ContactPreview from '../components/ContactPreview'
export default function Home(){
  return (
    <div className="space-y-8">
      <Hero/>
      <MenuPreview/>
      <OffersPreview/>
      <TestimonialsPreview/>
      <AboutPreview/>
      <ContactPreview/>
    </div>
  )
}
