import styled from 'styled-components'

export const RemoveItemContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.button};

  font-size: ${(props) => props.theme['text-sizes']['text-bold-s']};
  color: ${(props) => props.theme.colors.text};

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.hover};
    transition: 0.2s;
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`
