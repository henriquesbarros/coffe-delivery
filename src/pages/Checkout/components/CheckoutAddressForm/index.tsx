import { MapPinLine } from 'phosphor-react'
import { BoxTitle } from '../../../../Common/components/BoxTitlte'
import { defaultTheme } from '../../../../styles/themes/default'
import { AddressInputs } from './components/AddressInput'
import { AddressFormContainer, CheckoutAddressFormContainer } from './styles'

export function CheckoutAddressForm() {
  return (
    <CheckoutAddressFormContainer>
      <h2>Complete seu pedido</h2>
      <AddressFormContainer>
        <BoxTitle
          icon={
            <MapPinLine size={22} color={defaultTheme.colors['yellow-dark']} />
          }
          sectionTitle="Endereço de Entrega"
          sectionSubtitle="Informe o endereço onde deseja receber seu pedido"
        />
        <AddressInputs />
      </AddressFormContainer>
    </CheckoutAddressFormContainer>
  )
}
