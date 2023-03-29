import {
  BillInformation,
  CartContainer,
  CheckoutContainer,
  CheckoutTitle,
} from './styles'
import { FormAddress } from './Form/FormAddress'
import { PaymentMethod } from './PaymentMethod/PaymentMethod'
import { Cart } from './Cart/Cart'

export function Checkout() {
  return (
    <CheckoutContainer>
      <BillInformation>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        <FormAddress />
        <PaymentMethod />
      </BillInformation>
      <CartContainer>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>
        <Cart />
      </CartContainer>
    </CheckoutContainer>
  )
}
