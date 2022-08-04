import { Plus, Minus } from 'phosphor-react'
import { ChangeQuantityContainer } from './styles'

interface ChangeQuantityProps {
  quantity: number
  handleAddQuantity: () => void
  handleRemoveQuantity: () => void
}

export function ChangeQuantity({
  quantity,
  handleAddQuantity,
  handleRemoveQuantity,
}: ChangeQuantityProps) {
  return (
    <ChangeQuantityContainer>
      <button onClick={handleRemoveQuantity} disabled={quantity <= 1}>
        <Minus />
      </button>
      <span>{quantity}</span>
      <button onClick={handleAddQuantity}>
        <Plus />
      </button>
    </ChangeQuantityContainer>
  )
}
