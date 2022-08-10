import { Trash } from 'phosphor-react'
import { MouseEventHandler } from 'react'
import { RemoveItemContainer } from './styles'

interface RemoveItemProps {
  handleRemoveItemFromCart: MouseEventHandler<HTMLButtonElement>
}

export function RemoveItem({ handleRemoveItemFromCart }: RemoveItemProps) {
  return (
    <RemoveItemContainer onClick={handleRemoveItemFromCart}>
      <Trash size={16} />
      REMOVER
    </RemoveItemContainer>
  )
}
