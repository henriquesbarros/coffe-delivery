import {
  SuccessContainer,
  ConfirmationFeedbackTitles,
  Box,
  DeliveryInfos,
  DeliveryInfo,
  IconWrapper,
} from './styles'
import deliveryImage from '../../assets/delivery-image.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>

  function paymentMethodSelected() {
    if (state) {
      switch (state.paymentMethod) {
        case 'credit':
          return 'Cartão de crédito'
        case 'debit':
          return 'Cartão de débito'
        case 'money':
          return 'Dinheiro'
      }
    }
  }

  return (
    <SuccessContainer>
      <ConfirmationFeedbackTitles>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </ConfirmationFeedbackTitles>
      <Box>
        <DeliveryInfos>
          <DeliveryInfo>
            <IconWrapper variant="purple">
              <MapPin size={16} weight="fill" />
            </IconWrapper>
            <div>
              <p>
                Entrega em <strong>{`${state.street}, ${state.number}`}</strong>
              </p>
              <p>{`${state.district} - ${state.city}, ${state.uf}`}</p>
            </div>
          </DeliveryInfo>
          <DeliveryInfo>
            <IconWrapper variant="yellow">
              <Timer size={16} weight="fill" />
            </IconWrapper>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </DeliveryInfo>
          <DeliveryInfo>
            <IconWrapper variant="yellow-dark">
              <CurrencyDollar size={16} />
            </IconWrapper>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{paymentMethodSelected()}</strong>
              </p>
            </div>
          </DeliveryInfo>
        </DeliveryInfos>
        <figure>
          <img src={deliveryImage} alt="" />
        </figure>
      </Box>
    </SuccessContainer>
  )
}
