import { Flex } from '../../../../../../styles/global'
import { defaultTheme } from '../../../../../../styles/themes/default'
import { AddressInput, AddressInputsContainer } from './styles'

export function AddressInputs() {
  return (
    <AddressInputsContainer>
      <AddressInput w={defaultTheme['input-sizes'].s} placeholder="CEP" />
      <AddressInput placeholder="Rua" />
      <Flex>
        <AddressInput w={defaultTheme['input-sizes'].s} placeholder="Número" />
        <AddressInput
          w={defaultTheme['input-sizes'].l}
          placeholder="Complemento"
        />
      </Flex>
      <Flex>
        <AddressInput w={defaultTheme['input-sizes'].s} placeholder="Bairro" />
        <AddressInput w={defaultTheme['input-sizes'].m} placeholder="Cidade" />
        <AddressInput w={defaultTheme['input-sizes'].xs} placeholder="UF" />
      </Flex>
    </AddressInputsContainer>
  )
}
