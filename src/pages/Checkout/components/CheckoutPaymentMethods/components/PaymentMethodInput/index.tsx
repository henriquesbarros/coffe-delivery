/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { PaymentMethodContainer, ContentContainer } from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input type="radio" id={id} name="paymentMethod" {...props} ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          <p>{label}</p>
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})
