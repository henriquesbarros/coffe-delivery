import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { CheckoutAddressForm } from './components/CheckoutAddressForm'
import { CheckoutOrderSummary } from './components/CheckoutOrderSummary'
import { CheckoutPaymentMethods } from './components/CheckoutPaymentMethods'
import { Box, CheckoutContainer } from './styles'

const checkoutFormVlidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
})

export type OrderData = zod.infer<typeof checkoutFormVlidationSchema>

type CheckoutFormData = OrderData

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormVlidationSchema),
  })

  const { handleSubmit } = checkoutForm

  function handleConfirmOrder(data: CheckoutFormData) {
    console.log()
  }

  return (
    <CheckoutContainer>
      <FormProvider {...checkoutForm}>
        <form onSubmit={handleSubmit(handleConfirmOrder)}>
          <Box>
            <CheckoutAddressForm />
            <CheckoutPaymentMethods />
          </Box>
          <CheckoutOrderSummary />
        </form>
      </FormProvider>
    </CheckoutContainer>
  )
}
