import React, {createContext,useContext,useReducer,useEffect} from 'react'
const CartState = createContext(), CartDispatch = createContext()
const KEY='coffee_cart_v2'
const initial={items:[],total:0}
function calc(items){return items.reduce((s,i)=>s+i.price*i.qty,0)}
function reducer(state,act){
  let items
  switch(act.type){
    case'INIT': return act.payload
    case'ADD':
      const found=state.items.find(i=>i.id===act.payload.id)
      if(found) items=state.items.map(i=>i.id===act.payload.id?{...i,qty:i.qty+1}:i)
      else items=[...state.items,{...act.payload,qty:1}]
      return {items,total:calc(items)}
    case'INCR':
      items=state.items.map(i=>i.id===act.payload?{...i,qty:i.qty+1}:i); return {items,total:calc(items)}
    case'DECR':
      items=state.items.map(i=>i.id===act.payload?{...i,qty:Math.max(1,i.qty-1)}:i); return {items,total:calc(items)}
    case'REMOVE':
      items=state.items.filter(i=>i.id!==act.payload); return {items,total:calc(items)}
    case'CLEAR': return {items:[],total:0}
    default: return state
  }
}
export function CartProvider({children}){const[state,dispatch]=useReducer(reducer,initial)
  useEffect(()=>{try{const r=localStorage.getItem(KEY); if(r) dispatch({type:'INIT',payload:JSON.parse(r)})}catch{}},[])
  useEffect(()=>{try{localStorage.setItem(KEY,JSON.stringify(state))}catch{}},[state])
  return <CartState.Provider value={state}><CartDispatch.Provider value={dispatch}>{children}</CartDispatch.Provider></CartState.Provider>
}
export function useCartState(){return useContext(CartState)}
export function useCartDispatch(){return useContext(CartDispatch)}
