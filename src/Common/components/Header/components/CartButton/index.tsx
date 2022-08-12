import { CartButtonContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../../../contexts/CartContext'

interface CartButtonProps {
  bgColor: 'yellow-light' | 'purple-dark' | 'input'
  iconColor: 'yellow-dark' | 'white' | 'label'
}

export function CartButton({ bgColor, iconColor }: CartButtonProps) {
  const { cartItems } = useContext(CartContext)

  const quantityOfItemsInCart = cartItems.reduce((total, currentCartItem) => {
    return total + currentCartItem.quantity
  }, 0)

  return (
    <CartButtonContainer bgColor={bgColor} iconColor={iconColor}>
      {cartItems.length ? <span>{quantityOfItemsInCart}</span> : <></>}
      <ShoppingCart size={22} weight="fill" />
    </CartButtonContainer>
  )
}
