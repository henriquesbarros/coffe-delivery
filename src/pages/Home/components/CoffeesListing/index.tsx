import {
  ListCoffeesContainer,
  ListCoffees,
  CoffeeCard,
  CoffeeTags,
  CoffeeName,
  CoffeeDescription,
  AddToCartContainer,
  CoffeePrice,
} from './styles'
import { coffees } from '../../../../data/coffees'
import { CartButton } from '../../../../Common/components/CartButton'
import { ChangeQuantity } from '../../../../Common/components/ChangeQuantity'
import { formatMoney } from '../../../../utils/formatMoney'

export function CoffeesListing() {
  return (
    <ListCoffeesContainer>
      <h1>Nossos cafés</h1>
      <ListCoffees>
        {coffees.map((coffee) => {
          return (
            <CoffeeCard key={coffee.id}>
              <figure>
                <img src={`src/assets/coffees/${coffee.photo}`} alt="" />
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
                <ChangeQuantity />
                <CartButton
                  bgColor="purple-dark"
                  iconColor="white"
                  coffeeListing
                />
              </AddToCartContainer>
            </CoffeeCard>
          )
        })}
      </ListCoffees>
    </ListCoffeesContainer>
  )
}
