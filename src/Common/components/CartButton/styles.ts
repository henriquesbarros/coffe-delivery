import styled from 'styled-components'

interface CartButtonContainerProps {
  bgColor: 'yellow-light' | 'purple-dark' | 'input'
  iconColor: 'yellow-dark' | 'white' | 'label'
  coffeeListing?: boolean
}

export const CartButtonContainer = styled.button<CartButtonContainerProps>`
  position: relative;
  display: flex;

  align-items: center;

  padding: 0.625rem; /* 10px */
  border-radius: 8px;
  border: none;

  background: ${(props) => props.theme.colors[`${props.bgColor}`]};

  cursor: pointer;

  transition: 0.1s;

  ${(props) =>
    props.coffeeListing &&
    `
    &:hover {
      background: ${props.theme.colors.purple}
    }
  `}

  svg {
    color: ${(props) => props.theme.colors[`${props.iconColor}`]};
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
