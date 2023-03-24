import { CoffeProps } from '../../../../mock/coffees.mock'
import { Counter } from '../../../../components/Counter/Counter'
import { useState } from 'react'
import {
  Actions,
  Amount,
  CoffeeContainerItem,
  CoffeeDescription,
  CoffeeImage,
  CoffeeTitle,
  Tag,
  TagsContainer,
} from './styles'
import { Button } from '../../../../components/Button/Button'
import { ShoppingCart } from '@phosphor-icons/react'

interface ICoffee {
  coffee: CoffeProps
}

export function Coffee({ coffee }: ICoffee) {
  const { img, tags, name, description, value } = coffee
  const [counter, setCounter] = useState(0)

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

  const [currency, amount] = formattedValue.split(/\s/)

  const onQuantityChange = (newQuantity: number) => {
    setCounter(newQuantity)
  }

  return (
    <CoffeeContainerItem>
      <CoffeeImage src={img} alt={description} />
      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={tag}>{tag.toUpperCase()}</Tag>
        ))}
      </TagsContainer>
      <CoffeeTitle>{name}</CoffeeTitle>
      <CoffeeDescription>{description}</CoffeeDescription>
      <Actions>
        <Amount>
          <span>{currency}</span> {amount}
        </Amount>
        <div>
          <Counter quantity={counter} onQuantityChange={onQuantityChange} />
          <Button variant={'icon-primary'}>
            <ShoppingCart weight={'fill'} size={20} />
          </Button>
        </div>
      </Actions>
    </CoffeeContainerItem>
  )
}
