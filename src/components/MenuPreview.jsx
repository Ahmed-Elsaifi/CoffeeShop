import React from 'react'
import menu from '../data/menuData'
import ProductCard from './ProductCard'
import { useCartDispatch } from '../state/CartContext'
export default function MenuPreview(){
  const dispatch = useCartDispatch()
  const add = item => dispatch({type:'ADD', payload:{id:item.id,name:item.name,price:item.price,img:item.img}})
  return (
    <section id="products" className="mt-6">
      <h2 className="text-xl font-bold text-primary mb-4">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.map(it=> <ProductCard key={it.id} item={it} onAdd={add}/>)}
      </div>
    </section>
  )
}
