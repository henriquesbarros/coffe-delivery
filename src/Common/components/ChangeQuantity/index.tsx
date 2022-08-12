import { Plus, Minus } from 'phosphor-react'
import { ChangeQuantityContainer, IconWrapper } from './styles'

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
      <IconWrapper
        onClick={handleRemoveQuantity}
        disabled={quantity <= 1}
        type="button"
      >
        <Minus weight="fill" />
      </IconWrapper>
      <span>{quantity}</span>
      <IconWrapper onClick={handleAddQuantity} type="button">
        <Plus weight="fill" />
      </IconWrapper>
    </ChangeQuantityContainer>
  )
}
