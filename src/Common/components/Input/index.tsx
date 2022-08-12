import { forwardRef, InputHTMLAttributes } from 'react'
import {
  InputContainer,
  InputWrapper,
  InputStyled,
  RightText,
  Error,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputContainer>
        {error && <Error>{error}</Error>}
      </InputWrapper>
    )
  },
)
