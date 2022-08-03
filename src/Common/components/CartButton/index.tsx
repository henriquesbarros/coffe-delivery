import { CartButtonContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'

interface CartButtonProps {
  bgColor: 'yellow-light' | 'purple-dark'
  iconColor: 'yellow-dark' | 'white'
  coffeeListing?: boolean
}

export function CartButton({
  bgColor,
  iconColor,
  coffeeListing = false,
}: CartButtonProps) {
  return (
    <CartButtonContainer
      bgColor={bgColor}
      iconColor={iconColor}
      coffeeListing={coffeeListing}
    >
      {false && <span>3</span>}
      <ShoppingCart size={22} weight="fill" />
    </CartButtonContainer>
  )
}
