import { InputHTMLAttributes, ReactNode } from 'react'
import { PaymentMethodContainer, ContentContainer } from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export function PaymentMethodInput({
  id,
  icon,
  label,
  ...props
}: PaymentMethodInputProps) {
  return (
    <PaymentMethodContainer>
      <input type="radio" id={id} name="paymentMethod" {...props} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          <p>{label}</p>
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
}
