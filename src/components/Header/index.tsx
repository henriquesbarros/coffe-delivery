import { HeaderButtonsContainer, HeaderContainer } from './styles'
import { IoLocationSharp, IoCart } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import logoCoffeDelivery from '../../assets/logo-coffe-delivery.svg'

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
          <button>
            {true && <span>3</span>}
            <IoCart size={22} />
          </button>
        </NavLink>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}
