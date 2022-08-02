import { ServiceInfo } from './components/ServiceInfo'
import {
  HomeContainer,
  Introduction,
  MainText,
  ServicesContainer,
} from './styles'
import coffeImage from '../../assets/main-image.png'

export function Home() {
  return (
    <HomeContainer>
      <Introduction>
        <div>
          <MainText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>
          </MainText>
          <ServicesContainer>
            <ServiceInfo service="purchase" bg-color="yellow-dark" />
            <ServiceInfo service="delivery" bg-color="yellow" />
            <ServiceInfo service="packaging" bg-color="text" />
            <ServiceInfo service="coffee" bg-color="purple" />
          </ServicesContainer>
        </div>

        <figure>
          <img src={coffeImage} alt="" />
        </figure>
      </Introduction>
    </HomeContainer>
  )
}
