import { HeaderButtonsContainer, HeaderContainer } from './styles'
import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffeDelivery from '../../../assets/logo-coffe-delivery.svg'
import { CartButton } from './components/CartButton'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

export function Header() {
  const { cartItems } = useContext(CartContext)

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
        {cartItems.length ? (
          <NavLink to="/checkout">
            <CartButton bgColor="yellow-light" iconColor="yellow-dark" />
          </NavLink>
        ) : (
          <CartButton bgColor="input" iconColor="label" />
        )}
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
