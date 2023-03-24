import { MapPinLine } from '@phosphor-icons/react'
import {
  Form,
  FormAddressContainer,
  HeaderForm,
  Input,
  TitleAddress,
} from './FormAddress.styled'

export function FormAddress() {
  return (
    <FormAddressContainer>
      <HeaderForm>
        <MapPinLine size={22} color={'#C47F17'} />
        <TitleAddress>
          Endereço de entrega
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </TitleAddress>
      </HeaderForm>

      <Form>
        <Input id={'zipCode'} name="zipCode" placeholder={'CEP'} />
        <Input name="street" placeholder={'Rua'} />
        <div>
          <Input id={'number'} name="number" placeholder={'Número'} />
          <Input
            id={'complement'}
            name="complement"
            placeholder={'Complemento'}
          />
        </div>
        <div>
          <Input id={'district'} name="district" placeholder={'Bairro'} />
          <Input id={'city'} name="city" placeholder={'Cidade'} />
          <Input id={'uf'} name="uf" placeholder={'UF'} />
        </div>
      </Form>
    </FormAddressContainer>
  )
}
