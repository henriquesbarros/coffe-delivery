import { CartButtonContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'

interface CartButtonProps {
  bgColor: 'yellow-light' | 'purple-dark'
  iconColor: 'yellow-dark' | 'white'
}

export function CartButton({ bgColor, iconColor }: CartButtonProps) {
  return (
    <CartButtonContainer bgColor={bgColor} iconColor={iconColor}>
      {false && <span>3</span>}
      <ShoppingCart size={22} weight="fill" />
    </CartButtonContainer>
  )
}
