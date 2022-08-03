import { HeaderButtonsContainer, HeaderContainer } from './styles'
import { IoLocationSharp } from 'react-icons/io5'
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
          <IoLocationSharp size={22} />
          Recife, PE
        </span>
        <NavLink to="/checkout">
          <CartButton bgColor="yellow-light" iconColor="yellow-dark" />
        </NavLink>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
