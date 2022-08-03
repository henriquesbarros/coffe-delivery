import styled from 'styled-components'

export const ChangeQuantityContainer = styled.div`
  padding: 0.5rem 0.55rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 0.5rem;

  border-radius: 10px;

  background: ${(props) => props.theme.colors.button};

  button {
    border: none;
    background: transparent;
    cursor: pointer;

    span {
    }

    svg {
      color: ${(props) => props.theme.colors.purple};
    }
  }
`
