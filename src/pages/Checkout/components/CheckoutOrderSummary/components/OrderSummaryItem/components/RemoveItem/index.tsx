import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../../../../../../contexts/CartContext'
import { RemoveItemContainer } from './styles'

interface RemoveItemProps {
  coffeeId: number
}

export function RemoveItem({ coffeeId }: RemoveItemProps) {
  const { removeCartItem } = useContext(CartContext)

  function handleRemoveItem() {
    removeCartItem(coffeeId)
  }

  return (
    <RemoveItemContainer type="button" onClick={handleRemoveItem}>
      <Trash size={16} />
      REMOVER
    </RemoveItemContainer>
  )
}
