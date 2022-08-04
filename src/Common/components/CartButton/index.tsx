import { CartButtonContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

interface CartButtonProps {
  bgColor: 'yellow-light' | 'purple-dark'
  iconColor: 'yellow-dark' | 'white'
  coffeeListing?: boolean
  quantity: number
  handleClick: (quantity: number, resetCartQuantity: () => void) => void
  resetCartQuantity: () => void
}

export function CartButton({
  bgColor,
  iconColor,
  coffeeListing = false,
  quantity,
  handleClick,
  resetCartQuantity,
}: CartButtonProps) {
  const { cartQuantity } = useContext(CartContext)
  return (
    <CartButtonContainer
      bgColor={bgColor}
      iconColor={iconColor}
      coffeeListing={coffeeListing}
      onClick={() => handleClick(quantity, resetCartQuantity)}
    >
      {!coffeeListing && cartQuantity ? <span>{cartQuantity}</span> : <></>}
      <ShoppingCart size={22} weight="fill" />
    </CartButtonContainer>
  )
}
