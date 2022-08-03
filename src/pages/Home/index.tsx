import { HomeContainer } from './styles'

import { CoffeesListing } from './components/CoffeesListing'
import { Introduction } from './components/Introduction'

export function Home() {
  return (
    <HomeContainer>
      <Introduction />
      <CoffeesListing />
    </HomeContainer>
  )
}
