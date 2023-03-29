import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import {
  Container,
  HeaderPayment,
  ListPayment,
  TitlePayment,
} from './PaymentMethod.styled'
import { useState } from 'react'
export function PaymentMethod() {
  const [payments, setPayments] = useState([
    {
      id: 'credit',
      label: 'Cartão de credito',
      icon: <CreditCard size={22} color={'#8047F8'} />,
      isSelected: false,
    },
    {
      id: 'debit',
      label: 'Cartão de débito',
      icon: <Bank size={22} color={'#8047F8'} />,
      isSelected: false,
    },
    {
      id: 'cash',
      label: 'Dinheiro',
      icon: <Money size={22} color={'#8047F8'} />,
      isSelected: false,
    },
  ])
  const [selectedPayment, setSelectPayment] = useState<string | undefined>()

  const handleSelectPayment = (id: string) => {
    setSelectPayment(id)
    const updatedPayments = payments.map((payment) => ({
      ...payment,
      isSelected: payment.id === id,
    }))

    setPayments(updatedPayments)
  }

  return (
    <Container>
      <HeaderPayment>
        <CurrencyDollar size={22} color={'#8047F8'} />
        <TitlePayment>
          Endereço de entrega
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </TitlePayment>
      </HeaderPayment>

      <ListPayment>
        {payments.map(({ label, icon, isSelected, id }) => (
          <li
            key={label}
            className={isSelected ? 'selected' : ''}
            onClick={() => handleSelectPayment(id)}
          >
            {icon}
            <label>{label.toUpperCase()}</label>
          </li>
        ))}
      </ListPayment>
    </Container>
  )
}
