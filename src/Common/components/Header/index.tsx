import { HeaderButtonsContainer, HeaderContainer } from './styles'
import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffeDelivery from '../../../assets/logo-coffe-delivery.svg'
import { CartButton } from '../CartButton'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeDelivery} alt="" />
      </NavLink>
      <HeaderButtonsContainer>
        <span>
          <MapPin size={22} weight="fill" />
          Recife, PE
        </span>
        <NavLink to="/checkout">
          <CartButton bgColor="yellow-light" iconColor="yellow-dark" />
        </NavLink>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
