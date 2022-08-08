import styled from 'styled-components'

export const PaymentMethodsContainer = styled.section`
  width: 40rem;
  height: 12.9375rem;
  margin-top: 1rem;
  border-radius: 6px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors.card};
`
export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;

  margin-top: 1rem;
`
