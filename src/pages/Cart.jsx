import React from 'react'
import { useCartState, useCartDispatch } from '../state/CartContext'
export default function Cart(){
  const state = useCartState(), dispatch = useCartDispatch()
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold text-primary">Your Cart</h1>
      {state.items.length===0 ? <div className="text-gray-500">Cart is empty.</div> : (
        <div className="space-y-3">
          {state.items.map(it=>(
            <div key={it.id} className="flex items-center gap-4 bg-white dark:bg-gray-800 p-3 rounded">
              <img src={it.img} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <div className="font-semibold">{it.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-300">${it.price.toFixed(2)} x {it.qty}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={()=>dispatch({type:'DECR', payload:it.id})} className="px-2 py-1 border rounded">-</button>
                <button onClick={()=>dispatch({type:'INCR', payload:it.id})} className="px-2 py-1 border rounded">+</button>
                <button onClick={()=>dispatch({type:'REMOVE', payload:it.id})} className="text-red-600">Remove</button>
              </div>
            </div>
          ))}
          <div className="font-bold">Total: ${state.total.toFixed(2)}</div>
          <div className="flex gap-2"><button onClick={()=>dispatch({type:'CLEAR'})} className="border px-3 py-2 rounded">Clear</button><button onClick={()=>alert('Checkout simulation')} className="bg-primary text-white px-3 py-2 rounded">Checkout</button></div>
        </div>
      )}
    </section>
  )
}
