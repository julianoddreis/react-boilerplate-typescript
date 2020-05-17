import React from 'react'
import { useForm } from 'react-hook-form'

import { Column, Input, Button } from 'components'
import { loginSchema } from 'utils/yup-schemas'

interface LoginValues {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit, errors, formState } = useForm<LoginValues>({ validationSchema: loginSchema })

  const onSubmit = handleSubmit(values => {
    return new Promise(resolve => {
      setTimeout(() => resolve(console.log(values)), 2000)
    })
  })

  return (
    <Column bg='primary' minHeight='100vh' alignItems='center' justifyContent='center'>
      <Column bg='secondary' p={40} borderRadius={10} alignItems='center'>
        <form onSubmit={onSubmit}>
          <Input name='email' register={register} label='E-mail' placeholder='e-mail' error={errors.email} mb={10} />
          <Input
            name='password'
            register={register}
            label='Senha'
            placeholder='******'
            type='password'
            error={errors.password}
            mb={10}
          />
          <Button variant='primary' isLoading={formState.isSubmitting}>
            Entrar
          </Button>
        </form>
      </Column>
    </Column>
  )
}

export default Login