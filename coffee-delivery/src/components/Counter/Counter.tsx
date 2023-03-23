import React, { useState } from 'react'
import { CounterContainer, MinusButton, PlusButton } from './Counter.styled'

interface CounterProps {
  quantity: number
  onQuantityChange: (newQuantity: number) => void
}

export function Counter({ quantity, onQuantityChange }: CounterProps) {
  const [count, setCount] = useState(quantity)

  const handleIncrement = () => {
    const newCount = count + 1
    setCount(newCount)
    onQuantityChange(newCount)
  }

  const handleDecrement = () => {
    const newCount = count - 1
    if (newCount >= 0) {
      setCount(newCount)
      onQuantityChange(newCount)
    }
  }

  return (
    <CounterContainer>
      <MinusButton onClick={handleDecrement}>-</MinusButton>
      <p>{count}</p>
      <PlusButton onClick={handleIncrement}>+</PlusButton>
    </CounterContainer>
  )
}
