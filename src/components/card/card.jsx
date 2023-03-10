import React, { useState } from 'react'
import './card.css'
import Button from '../button/button'
const Card = ({ food, onAdd, onRemove }) => {
  const [count, setCount] = useState(0)
  const { title, image, price, id } = food
  const handleIncrement = () => {
    setCount(count + 1)
    onAdd(food)
  }
  const handleDecrement = () => {
    setCount(count - 1)
    onRemove(food)
  }
  return (
    <div className='card'>
      <span
        className={`${count !== 0 ? 'card_badge' : 'card_badge--hidden'}`}
      >{count}</span>
      <div className='image_container'>
        <img src={image} alt={title} />
      </div>
      <h4 className='card_title'>
        {title}.<span className='card_price'>{price}</span>
      </h4>
      <div className='btn_container'>
        <Button title={'+'} type={'add'} onClick={handleIncrement} />
        {count !== 0 ? <Button title={'-'} type={'remove'} onClick={handleDecrement}/> : ''}
      </div>
    </div>
  )
}

export default Card
