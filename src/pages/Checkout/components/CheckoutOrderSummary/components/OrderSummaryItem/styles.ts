import styled from 'styled-components'

export const OrderSummaryItemContainer = styled.div`
  width: 23rem;
  padding: 0 0.5rem 1.5rem;
  display: grid;
  grid-template-columns: 4rem 1fr 1fr;
  gap: 1.25rem;

  border-bottom: 1px solid ${(props) => props.theme.colors.hover};

  &:nth-child(n + 2) {
    padding-top: 1.5rem;
  }

  figure img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  div {
    width: 10.625rem;

    p {
      margin-bottom: 0.5rem;
    }
  }
`

export const OrderSummaryItemName = styled.p``

export const OrderSummaryItemPrice = styled.span`
  margin-left: 1.875rem;
  width: 3.4375rem;
  font-weight: bold;
`

export const OrderSummaryItemActions = styled.div`
  display: flex;
`
