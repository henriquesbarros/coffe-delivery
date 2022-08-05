import { useContext, useState } from 'react'
import { CartButton } from '../../../../Common/components/CartButton'
import { ChangeQuantity } from '../../../../common/components/ChangeQuantity'
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

interface Coffee {
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

export function CoffeeCard({
  coffee: { id, photo, tags, name, description, price },
}: CoffeeCardProps) {
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
    <CoffeeCardContainer key={id}>
      <figure>
        <img src={`src/assets/coffees/${photo}`} alt="" />
      </figure>
      <CoffeeTags>
        {tags.map((tag) => (
          <p key={tag}>{tag.toUpperCase()}</p>
        ))}
      </CoffeeTags>

      <CoffeeName>{name}</CoffeeName>
      <CoffeeDescription>{description}</CoffeeDescription>

      <AddToCartContainer>
        <CoffeePrice>
          <p>R$</p>
          <span>{formatMoney(price)}</span>
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
          handleClick={handleAddToCart}
          quantity={quantity}
          resetCartQuantity={resetCartQuantity}
        />
      </AddToCartContainer>
    </CoffeeCardContainer>
  )
}
