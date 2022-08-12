import { useContext, useState } from 'react'
import { CartButton } from '../../../../Common/components/CartButton'
import { ChangeQuantity } from '../../../../Common/components/ChangeQuantity'
import { CartContext } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  AddToCartContainer,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeName,
  CoffeePrice,
  CoffeeTags,
} from './styles'

export interface Coffee {
  id: number
  photo: string
  tags: string[]
  name: string
  description: string
  price: number
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { handleAddToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState<number>(1)

  function handleAddQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleRemoveQuantity() {
    setQuantity((state) => state - 1)
  }

  function resetCartQuantity() {
    setQuantity(1)
  }

  return (
    <CoffeeCardContainer key={coffee.id}>
      <figure>
        <img src={`/coffees/${coffee.photo}`} alt="" />
      </figure>
      <CoffeeTags>
        {coffee.tags.map((tag) => (
          <p key={tag}>{tag.toUpperCase()}</p>
        ))}
      </CoffeeTags>

      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <AddToCartContainer>
        <CoffeePrice>
          <p>R$</p>
          <span>{formatMoney(coffee.price)}</span>
        </CoffeePrice>
        <ChangeQuantity
          quantity={quantity}
          handleAddQuantity={handleAddQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
        />
        <CartButton
          bgColor="purple-dark"
          iconColor="white"
          coffeeListing
          coffee={coffee}
          quantity={quantity}
          handleClick={handleAddToCart}
          resetCartQuantity={resetCartQuantity}
        />
      </AddToCartContainer>
    </CoffeeCardContainer>
  )
}
