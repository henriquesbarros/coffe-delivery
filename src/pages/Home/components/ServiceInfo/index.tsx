import { IoCart, IoCube, IoTime } from 'react-icons/io5'
import { FaCoffee } from 'react-icons/fa'
import { Info, InfoIcon } from './styles'

interface ServiceInfoProps {
  service: 'purchase' | 'delivery' | 'packaging' | 'coffee'
  'bg-color': string
}

export function ServiceInfo({ service }: ServiceInfoProps) {
  function getService() {
    switch (service) {
      case 'purchase':
        return (
          <Info>
            <InfoIcon bg-color="yellow-dark">
              <IoCart />
            </InfoIcon>
            <p>Compra simples e segura</p>
          </Info>
        )
      case 'delivery':
        return (
          <Info>
            <InfoIcon bg-color="yellow">
              <IoCube />
            </InfoIcon>
            <p>Embalagem mantém o café intacto</p>
          </Info>
        )
      case 'packaging':
        return (
          <Info>
            <InfoIcon bg-color="text">
              <IoTime />
            </InfoIcon>
            <p>Entrega rápida e rastreada</p>
          </Info>
        )
      case 'coffee':
        return (
          <Info>
            <InfoIcon bg-color="purple">
              <FaCoffee />
            </InfoIcon>
            <p>Embalagem mantém o café intacto</p>
          </Info>
        )
    }
  }

  return <>{getService()}</>
}
