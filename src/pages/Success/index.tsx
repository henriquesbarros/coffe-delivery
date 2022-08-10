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

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
                <strong>Cartão de crédito</strong>
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
