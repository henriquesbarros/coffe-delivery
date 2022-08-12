import { useContext } from 'react'
import { ChangeQuantity } from '../../../../../../Common/components/ChangeQuantity'
import { CartContext, CartItem } from '../../../../../../contexts/CartContext'
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
}

export function OrderSummaryItem({ cartItem }: OrderSummaryItemProps) {
  const { changeCartQuantity } = useContext(CartContext)

  function handleAddQuantity() {
    changeCartQuantity(cartItem.id, 'add')
  }

  function handleRemoveQuantity() {
    changeCartQuantity(cartItem.id, 'remove')
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
            quantity={cartItem.quantity}
            handleAddQuantity={handleAddQuantity}
            handleRemoveQuantity={handleRemoveQuantity}
          />
          <RemoveItem coffeeId={cartItem.id} />
        </OrderSummaryItemActions>
      </div>
      <OrderSummaryItemPrice>{formattedPrice}</OrderSummaryItemPrice>
    </OrderSummaryItemContainer>
  )
}
