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

interface CartButtonProps {
  'bg-color': 'yellow-light' | 'purple-dark'
  'icon-color': 'yellow-dark' | 'white'
}

export const CartButton = styled.button<CartButtonProps>`
  position: relative;
  display: flex;

  align-items: center;

  padding: 0.625rem; /* 10px */
  border-radius: 8px;
  border: none;

  background: ${(props) => props.theme.colors[`${props['bg-color']}`]};

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors[`${props['icon-color']}`]};
  }

  span {
    position: absolute;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.75rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    font-weight: 700;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors['yellow-dark']};
    border-radius: 10px;
  }
`
