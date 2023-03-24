import { BillInformation, CheckoutContainer, CheckoutTitle } from './styles'
import { FormAddress } from './Form/FormAddress'

export function Checkout() {
  return (
    <CheckoutContainer>
      <BillInformation>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        <FormAddress />
      </BillInformation>
    </CheckoutContainer>
  )
}
