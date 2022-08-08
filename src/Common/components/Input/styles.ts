import styled from 'styled-components'

interface InputContainerProps {
  hasError: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1.5px solid ${(props) => props.theme.colors.button};
  background: ${(props) => props.theme.colors.input};
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${(props) => props.theme.colors['yellow-dark']};
  }

  ${(props) =>
    props.hasError &&
    `
      border-color: ${props.theme.colors.error};
    `}
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${(props) => props.theme.colors.error};
  }
`

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme['text-sizes']['text-bold-s']};
  padding: 0 0.75rem;

  outline: 0;

  &::placeholder {
    color: ${(props) => props.theme.colors.label};
  }
`

export const RightText = styled.p`
  font-size: ${(props) => props.theme['text-sizes']['text-bold-s']};
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme.colors.label};
`
