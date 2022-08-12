import { ListCoffeesContainer, ListCoffees } from './styles'
import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeeCard'

export function CoffeesListing() {
  return (
    <ListCoffeesContainer>
      <h1>Nossos cafés</h1>
      <div>
        <ListCoffees>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </ListCoffees>
      </div>
    </ListCoffeesContainer>
  )
}
