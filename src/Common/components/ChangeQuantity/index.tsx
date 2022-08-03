import { Plus, Minus } from 'phosphor-react'
import { ChangeQuantityContainer } from './styles'

export function ChangeQuantity() {
  return (
    <ChangeQuantityContainer>
      <button>
        <Minus />
      </button>
      <span>1</span>
      <button>
        <Plus />
      </button>
    </ChangeQuantityContainer>
  )
}
