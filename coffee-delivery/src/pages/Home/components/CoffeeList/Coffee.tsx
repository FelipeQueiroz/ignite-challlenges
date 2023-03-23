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

interface ICoffee {
  coffee: CoffeProps
}

export function Coffee({ coffee }: ICoffee) {
  const { img, tags, name, description, value } = coffee
  const [counter, setCounter] = useState(0)

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
        <Amount>{value}</Amount>
        <Counter quantity={counter} onQuantityChange={onQuantityChange} />
      </Actions>
    </CoffeeContainerItem>
  )
}
