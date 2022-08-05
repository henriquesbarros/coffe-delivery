import styled from 'styled-components'

export const CheckoutAddressFormContainer = styled.section`
  h2 {
    font-size: ${(props) => props.theme['text-sizes']['title-xs']};
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors.subtitle};
    line-height: 130%;
  }
`
export const AddressFormContainer = styled.section`
  width: 40rem;
  height: 23.25rem;
  margin-top: 1rem;
  border-radius: 6px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors.card};
`
