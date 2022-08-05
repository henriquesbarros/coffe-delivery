import { CheckoutAddressForm } from './components/CheckoutAddressForm'
import { CheckoutOrderSummary } from './components/CheckoutOrderSummary'
import { CheckoutPaymentMethods } from './components/CheckoutPaymentMethods'
import { Box, CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
        <Box>
          <CheckoutAddressForm />
          <CheckoutPaymentMethods />
        </Box>
        <CheckoutOrderSummary />
      </form>
    </CheckoutContainer>
  )
}
