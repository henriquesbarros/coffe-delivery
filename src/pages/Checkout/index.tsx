/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { CheckoutAddressForm } from './components/CheckoutAddressForm'
import { CheckoutOrderSummary } from './components/CheckoutOrderSummary'
import { CheckoutPaymentMethods } from './components/CheckoutPaymentMethods'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { Box, CheckoutContainer } from './styles'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const checkoutFormVlidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof checkoutFormVlidationSchema>

type CheckoutFormData = OrderData

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormVlidationSchema),
  })

  const { handleSubmit } = checkoutForm

  const { width } = useWindowDimensions()

  const navigate = useNavigate()

  function handleConfirmOrder(data: CheckoutFormData) {
    navigate('/success', {
      state: data,
    })
  }

  return (
    <CheckoutContainer>
      <FormProvider {...checkoutForm}>
        <form onSubmit={handleSubmit(handleConfirmOrder)}>
          {width <= 390 ? (
            <Box>
              <CheckoutAddressForm />
              <CheckoutPaymentMethods />
              <CheckoutOrderSummary />
            </Box>
          ) : (
            <>
              <Box>
                <CheckoutAddressForm />
                <CheckoutPaymentMethods />
              </Box>
              <CheckoutOrderSummary />
            </>
          )}
        </form>
      </FormProvider>
    </CheckoutContainer>
  )
}
