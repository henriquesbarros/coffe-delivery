import { Trash } from 'phosphor-react'
import { RemoveItemContainer } from './styles'

export function RemoveItem() {
  return (
    <RemoveItemContainer>
      <Trash size={16} />
      REMOVER
    </RemoveItemContainer>
  )
}
