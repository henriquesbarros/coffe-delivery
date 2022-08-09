import { useContext } from 'react'
import { Button } from '../../../../common/components/Button'
import { CartContext } from '../../../../contexts/CartContext'
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
            <p>R$ 29,70</p>
          </OrderSummaryTotalPrice>
          <OrderSummaryDelivery>
            <p>Entrega</p>
            <p>R$ 29,70</p>
          </OrderSummaryDelivery>
          <OrderSummaryFinalValue>
            <p>Total</p>
            <p>R$ 33,20</p>
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
