import { ActionsContainer, HeaderContainer, Location } from './Header.styled'
import logo from '../../assets/logo.png'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Button } from '../Button/Button'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt={'logo of coffee delivery'} className={'logo'} />
      <ActionsContainer>
        <Location>
          <MapPin weight={'fill'} size={22} />
          <p>Brasília, DF</p>
        </Location>
        <Button variant={'icon-secondary'}>
          <ShoppingCart weight={'fill'} size={22} />
          <span>3</span>
        </Button>
      </ActionsContainer>
    </HeaderContainer>
  )
}
