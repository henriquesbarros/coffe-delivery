import styled from 'styled-components'

export const AddressInputsContainer = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 1rem;
`

interface AddressInputProps {
  w?: string
}

export const AddressInput = styled.input<AddressInputProps>`
  height: 2.625rem;
  width: ${(props) => [props.w]};
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.button};
  border-radius: 4px;
  background: ${(props) => [props.theme.colors.input]};

  &::placeholder {
    font-size: ${(props) => props.theme['text-sizes']['text-regular-s']};
    color: ${(props) => props.theme.colors.label};
    line-height: 130%;
  }

  &:focus {
    border-color: ${(props) => props.theme.colors['yellow-dark']};
    box-shadow: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const OptionalText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme.colors.label};
`
