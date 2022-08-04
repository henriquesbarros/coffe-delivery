import { CartButton } from '../../../../Common/components/CartButton'
import { ChangeQuantity } from '../../../../Common/components/ChangeQuantity'
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
        <ChangeQuantity />
        <CartButton bgColor="purple-dark" iconColor="white" coffeeListing />
      </AddToCartContainer>
    </CoffeeCardContainer>
  )
}
