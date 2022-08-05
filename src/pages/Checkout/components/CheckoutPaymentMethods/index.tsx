import { CurrencyDollar } from 'phosphor-react'
import { BoxTitle } from '../../../../common/components/BoxTitlte'
import { defaultTheme } from '../../../../styles/themes/default'
import { PaymentMethodsContainer } from './styles'

export function CheckoutPaymentMethods() {
  return (
    <PaymentMethodsContainer>
      <BoxTitle
        icon={<CurrencyDollar size={22} color={defaultTheme.colors.purple} />}
        sectionTitle="Pagamento"
        sectionSubtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />
    </PaymentMethodsContainer>
  )
}
