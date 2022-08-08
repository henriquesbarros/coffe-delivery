import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: ${(props) => props.theme.colors['purple-light']};
    border: 1.5px solid ${(props) => props.theme.colors.purple};
  }
`
export const ContentContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  width: 11.125rem;
  height: 3.25rem;
  padding: 1rem;
  background: ${(props) => props.theme.colors.button};

  border: 1.5px solid ${(props) => props.theme.colors.button};

  border-radius: 6px;

  cursor: pointer;

  transition: 0.4s;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  p {
    font-size: ${(props) => props.theme['text-sizes']['text-bold-s']};
  }

  &:hover {
    background: ${(props) => props.theme.colors.hover};
  }
`
