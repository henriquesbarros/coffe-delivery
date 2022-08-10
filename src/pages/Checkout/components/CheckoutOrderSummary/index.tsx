import { useContext } from 'react'
import { Button } from '../../../../Common/components/Button'
import { CartContext } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { OrderSummaryItem } from './components/OrderSummaryItem'
import {
  CheckoutOrderSummaryContainer,
  OrderSummaryContainer,
  OrderSummaryDelivery,
  OrderSummaryFinalValue,
  OrderSummaryPrices,
  OrderSummaryTotalPrice,
} from './styles'

export function CheckoutOrderSummary() {
  const { cartItems } = useContext(CartContext)

  const totalItemsPrice = cartItems.reduce((total, currentCartItem) => {
    return total + currentCartItem.quantity * currentCartItem.price
  }, 0)

  const totalItemsPriceFormatted = `R$ ${formatMoney(totalItemsPrice)}`

  const DELIVERY = 3.5

  const orderTotalPriceFormatted = `R$ ${formatMoney(
    totalItemsPrice + DELIVERY,
  )}`

  return (
    <CheckoutOrderSummaryContainer>
      <h1>Cafés selecionados</h1>
      <OrderSummaryContainer>
        {cartItems.map((cartItem) => {
          return (
            <OrderSummaryItem
              key={cartItem.id}
              cartItem={cartItem}
              coffeeQuantity={cartItem.quantity}
            />
          )
        })}
        <OrderSummaryPrices>
          <OrderSummaryTotalPrice>
            <p>Total de itens</p>
            <p>{totalItemsPriceFormatted}</p>
          </OrderSummaryTotalPrice>
          <OrderSummaryDelivery>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </OrderSummaryDelivery>
          <OrderSummaryFinalValue>
            <p>Total</p>
            <p>{orderTotalPriceFormatted}</p>
          </OrderSummaryFinalValue>
        </OrderSummaryPrices>
        <Button
          type="submit"
          text="Confirmar Pedido"
          disabled={cartItems.length <= 0}
        />
      </OrderSummaryContainer>
    </CheckoutOrderSummaryContainer>
  )
}
