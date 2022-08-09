import styled from 'styled-components'

export const CheckoutOrderSummaryContainer = styled.section`
  h1 {
    font-size: ${(props) => props.theme['text-sizes']['title-xs']};
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors.subtitle};
    line-height: 130%;
  }
`

export const OrderSummaryContainer = styled.div`
  width: 28rem;
  min-height: 11.375rem;
  margin-top: 1rem;
  border-radius: 6px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors.card};
`

export const OrderSummaryPrices = styled.section`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.75rem;
`
export const OrderSummaryTotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  p:first-child {
    font-size: ${(props) => props.theme['text-sizes']['text-regular-s']};
  }
`
export const OrderSummaryDelivery = styled.div`
  display: flex;
  justify-content: space-between;

  p:first-child {
    font-size: ${(props) => props.theme['text-sizes']['text-regular-s']};
  }
`
export const OrderSummaryFinalValue = styled.div`
  display: flex;
  justify-content: space-between;

  font-weight: bold;
  font-size: ${(props) => props.theme['text-sizes']['text-regular-l']};
`