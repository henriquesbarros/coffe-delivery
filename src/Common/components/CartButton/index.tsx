import { CartButtonContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { Coffee } from '../../../pages/Home/components/CoffeeCard'

interface CartButtonProps {
  bgColor: 'yellow-light' | 'purple-dark' | 'input'
  iconColor: 'yellow-dark' | 'white' | 'label'
  coffeeListing?: boolean
  coffee: Coffee
  quantity: number
  handleClick: (
    coffee: Coffee,
    quantity: number,
    resetCartQuantity: () => void,
  ) => void
  resetCartQuantity: () => void
}

export function CartButton({
  bgColor,
  iconColor,
  coffeeListing = false,
  coffee,
  quantity,
  handleClick = () => {},
  resetCartQuantity,
}: CartButtonProps) {
  const { cartItems } = useContext(CartContext)

  const quantityOfItemsInCart = cartItems.reduce((total, currentCartItem) => {
    return total + currentCartItem.quantity
  }, 0)

  return (
    <CartButtonContainer
      bgColor={bgColor}
      iconColor={iconColor}
      coffeeListing={coffeeListing}
      onClick={() => handleClick(coffee, quantity, resetCartQuantity)}
    >
      {!coffeeListing && cartItems.length ? (
        <span>{quantityOfItemsInCart}</span>
      ) : (
        <></>
      )}
      <ShoppingCart size={22} weight="fill" />
    </CartButtonContainer>
  )
}
