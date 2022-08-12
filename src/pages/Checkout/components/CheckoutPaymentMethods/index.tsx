import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { BoxTitle } from '../../../../Common/components/BoxTitlte'
import { defaultTheme } from '../../../../styles/themes/default'
import { PaymentMethodInput } from './components/PaymentMethodInput'
import { PaymentMethodsContainer, PaymentMethods, Error } from './styles'

export const paymentMethods = {
  credit: {
    label: 'CARTÃO DE CRÉDITO',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'CARTÃO DE DÉBITO',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'DINHEIRO',
    icon: <Money size={16} />,
  },
}

export function CheckoutPaymentMethods() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentMethodsContainer>
      <BoxTitle
        icon={<CurrencyDollar size={22} color={defaultTheme.colors.purple} />}
        sectionTitle="Pagamento"
        sectionSubtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      />
      <PaymentMethods>
        {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <PaymentMethodInput
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
            {...register('paymentMethod')}
          />
        ))}
      </PaymentMethods>
      {paymentMethodError && <Error>{paymentMethodError}</Error>}
    </PaymentMethodsContainer>
  )
}
