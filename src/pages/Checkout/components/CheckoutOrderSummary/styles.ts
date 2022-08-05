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
  height: 31.125rem;
  margin-top: 1rem;
  border-radius: 6px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors.card};
`
