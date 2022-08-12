import styled from 'styled-components'

export const ChangeQuantityContainer = styled.div`
  max-width: 4.5rem;
  padding: 0.5rem 0.55rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 0.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme.colors.button};

  span {
    width: 1.125rem;
    text-align: center;
  }
`

export const IconWrapper = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  transition: 0.1s;

  &:not(:disabled):hover {
    color: ${(props) => props.theme.colors['purple-dark']};
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`
