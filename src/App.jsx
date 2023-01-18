import { useState, useEffect } from 'react'
import Card from './components/card/card'
import Cart from './components/cart/cart'
import './App.css'
import { getData } from './db/db'
const foods = getData()
const telegram = window.Telegram.WebApp;
function App () {
  // const [count, setCount] = useState(0)
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    telegram.ready();
  }, []);

  const onAdd = (food)=>{
    const exists = cartItems.find(x=> x.id === food.id)
    if(exists){
      setCartItems(cartItems.map(x=>{
        return x.id === food.id ? { ...exists, quantity: exists.quantity + 1 } : x
      }))
    }
    else{
      setCartItems([...cartItems,{ ...food, quantity:1 }])
    }
  }

  const onRemove = (food)=>{
    const exists = cartItems.find(x=> x.id === food.id)
    if(exists.quantity === 1){
      setCartItems(cartItems.filter(x=> x.id !== food.id))
    }
    else{
      setCartItems(cartItems.map(x=>{
       return x.id === food.id ? {...exists, quantity: exists.quantity - 1} : x
      }))
    }
  }

  const onCheckout = ()=>{
    telegram.MainButton.text = 'Buy :)'
    telegram.MainButton.show();
  }

  return (
    <div className='App'>
      <center>
        <h1>Order Food</h1>
      </center>
      <Cart cartItems={cartItems} onCheckout={onCheckout}></Cart>
      <div className='cards_container'>
        {foods.map(food => {
          return <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove}/>
        })}
      </div>
    </div>
  )
}

export default App
