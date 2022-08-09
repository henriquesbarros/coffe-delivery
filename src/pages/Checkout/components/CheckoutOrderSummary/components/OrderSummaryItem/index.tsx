import { useState } from 'react'
import { ChangeQuantity } from '../../../../../../common/components/ChangeQuantity'
import { CartItem } from '../../../../../../contexts/CartContext'
import { formatMoney } from '../../../../../../utils/formatMoney'
import { RemoveItem } from './components/RemoveItem'
import {
  OrderSummaryItemActions,
  OrderSummaryItemContainer,
  OrderSummaryItemName,
  OrderSummaryItemPrice,
} from './styles'

interface OrderSummaryItemProps {
  cartItem: CartItem
  coffeeQuantity: number
}

export function OrderSummaryItem({
  cartItem,
  coffeeQuantity,
}: OrderSummaryItemProps) {
  const [quantity, setQuantity] = useState<number>(coffeeQuantity)

  function handleAddQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleRemoveQuantity() {
    setQuantity((state) => state - 1)
  }

  const formattedPrice = `R$ ${formatMoney(cartItem.price)}`

  return (
    <OrderSummaryItemContainer key={cartItem.id}>
      <figure>
        <img src={`src/assets/coffees/${cartItem.photo}`} alt="" />
      </figure>
      <div>
        <OrderSummaryItemName>{cartItem.name}</OrderSummaryItemName>
        <OrderSummaryItemActions>
          <ChangeQuantity
            quantity={quantity}
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
          />
          <RemoveItem />
        </OrderSummaryItemActions>
      </div>
      <OrderSummaryItemPrice>{formattedPrice}</OrderSummaryItemPrice>
    </OrderSummaryItemContainer>
  )
}
