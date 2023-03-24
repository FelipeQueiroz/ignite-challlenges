import { ActionsContainer, HeaderContainer, Location } from './Header.styled'
import logo from '../../assets/logo.png'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Button } from '../Button/Button'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  const goToCheckout = () => {
    navigate('/checkout')
  }

  const goToHome = () => {
    navigate('/')
  }

  return (
    <HeaderContainer>
      <img
        onClick={goToHome}
        src={logo}
        alt={'logo of coffee delivery'}
        className={'logo'}
      />
      <ActionsContainer>
        <Location>
          <MapPin weight={'fill'} size={22} />
          <p>Brasília, DF</p>
        </Location>
        <Button variant={'icon-secondary'} onClick={goToCheckout}>
          <ShoppingCart weight={'fill'} size={22} />
          <span>3</span>
        </Button>
      </ActionsContainer>
    </HeaderContainer>
  )
}
