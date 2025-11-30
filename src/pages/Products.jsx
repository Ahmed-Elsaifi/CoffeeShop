import React from 'react'
import menu from '../data/menuData'
import ProductCard from '../components/ProductCard'
import { useCartDispatch } from '../state/CartContext'
export default function Products(){
  const dispatch = useCartDispatch()
  const add = item => dispatch({type:'ADD', payload:{id:item.id,name:item.name,price:item.price,img:item.img}})
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold text-primary">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.map(m=> <ProductCard key={m.id} item={m} onAdd={add}/>)}
      </div>
    </section>
  )
}
