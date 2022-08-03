import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.625rem; /* 10px */
    border-radius: 8px;

    color: ${(props) => props.theme.colors.purple};
    background: ${(props) => props.theme.colors['purple-light']};

    svg {
      color: ${(props) => props.theme.colors.purple};
    }
  }
`
