import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../../../common/components/Input'
import { AddressInputsContainer } from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressInputs() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <AddressInputsContainer>
      <Input
        type="number"
        placeholder="CEP"
        className="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        type="text"
        placeholder="Rua"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        type="number"
        placeholder="Número"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        type="text"
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input
        type="text"
        placeholder="Bairro"
        {...register('disctrict')}
        error={errors.disctrict?.message}
      />
      <Input
        type="text"
        placeholder="Cidade"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        type="text"
        placeholder="UF"
        {...register('uf')}
        error={errors.uf?.message}
      />
    </AddressInputsContainer>
  )
}
