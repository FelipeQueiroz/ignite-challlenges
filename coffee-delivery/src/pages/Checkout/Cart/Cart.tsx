import { CartContainer } from '../styles'
import { useState } from 'react'
import {
  ActionsContainer,
  Amount,
  ButtonRemove,
  CartItem,
  CartList,
  InfoItemContainer,
} from './Cart.styled'
import { coffees, ICoffee } from '../../../mock/coffees.mock'
import { Counter } from '../../../components/Counter/Counter'
import { Trash } from '@phosphor-icons/react'

interface IOrder {
  orderId: number
  coffee: ICoffee
  quantity: number
}

export function Cart() {
  const [order, setOrder] = useState<Array<IOrder>>([
    {
      orderId: 1,
      coffee: coffees[2],
      quantity: 3,
    },
    {
      orderId: 2,
      coffee: coffees[10],
      quantity: 3,
    },
  ])

  const handleItem = (item: IOrder) => {
    const onQuantityChange = (newQuantity: number) => {
      const updatedOrder = [...order]
      updatedOrder[item.orderId] = {
        ...updatedOrder[item.orderId],
        quantity: newQuantity,
      }
      setOrder(updatedOrder)
    }

    return (
      <CartItem key={item.coffee.id}>
        <InfoItemContainer>
          <img src={item.coffee.img} alt={'Coffee Image'} />
          <ActionsContainer>
            <p>{item.coffee.name}</p>
            <div>
              <Counter
                quantity={item.quantity}
                onQuantityChange={onQuantityChange}
              />
              <ButtonRemove>
                <Trash size={16} color={'#8047F8'} />
                REMOVER
              </ButtonRemove>
            </div>
          </ActionsContainer>

          <Amount>{item.coffee.value}</Amount>
        </InfoItemContainer>
      </CartItem>
    )
  }

  return (
    <CartContainer>
      <CartList>{order.map((item) => handleItem(item))}</CartList>
    </CartContainer>
  )
}
