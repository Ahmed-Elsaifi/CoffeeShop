import React, {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Offers from './pages/Offers'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { CartProvider } from './state/CartContext'

export default function App(){
  const [dark,setDark] = useState(false)
  useEffect(()=>{AOS.init({duration:800,once:true})},[])
  useEffect(()=>{document.documentElement.classList.toggle('dark',dark)},[dark])
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar dark={dark} setDark={setDark}/>
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/testimonials" element={<Testimonials/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}
