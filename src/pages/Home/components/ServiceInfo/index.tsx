import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
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
              <ShoppingCart size={22} weight="fill" />
            </InfoIcon>
            <p>Compra simples e segura</p>
          </Info>
        )
      case 'delivery':
        return (
          <Info>
            <InfoIcon bg-color="yellow">
              <Package size={22} weight="fill" />
            </InfoIcon>
            <p>Embalagem mantém o café intacto</p>
          </Info>
        )
      case 'packaging':
        return (
          <Info>
            <InfoIcon bg-color="text">
              <Timer size={22} weight="fill" />
            </InfoIcon>
            <p>Entrega rápida e rastreada</p>
          </Info>
        )
      case 'coffee':
        return (
          <Info>
            <InfoIcon bg-color="purple">
              <Coffee size={22} weight="fill" />
            </InfoIcon>
            <p>Embalagem mantém o café intacto</p>
          </Info>
        )
    }
  }

  return <>{getService()}</>
}
