'use client'

import * as yup from 'yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'
import { Button } from '@/components/ui/button'

type FormDataProps ={
  name:string;
  email:string;
  message:string;
  phone:string
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
  message: yup.string().required('Digite sua mensagem.'),
  phone: yup.string().required('Informe seu número de contato').matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Número de celular inválido'),
})

export function ContactForm(){
  const [phoneNumber, setPhoneNumber] = useState('');

  const { register, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    
    // Remove todos os caracteres não numéricos do valor
    const numericValue = value.replace(/\D/g, '');
    
    if (!numericValue) {
      setPhoneNumber('');
      return;
    }

    // Checa se o usuário está apagando caracteres
    const isDeleting = numericValue.length < phoneNumber.replace(/\D/g, '').length;

    // Formata o número de acordo com o padrão (00) 00000-0000
    const formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7, 11)}`;

    // Se o usuário estiver apagando, atualize phoneNumber com o valor não formatado
    setPhoneNumber(isDeleting ? numericValue : formattedValue);
  };
    
  function submitForm (data : FormDataProps) {
    console.log(data)
  }

  return (
   
    <form 
      onSubmit={handleSubmit(submitForm)}
      className='flex flex-col w-full my-8'
    >
      <input {
        ...register('name')} 
        className={`bg-primary text-neutral-400 mt-8 border-b border-secondary p-2 ${errors.name && ' border border-red-400'}`}
        placeholder='Nome'
        type='text'
        name='name'
      />
      
      {errors.name && <p className='text-left h-4 text-red-500 text-xs'>{errors.name.message}</p>}

      <input 
        {...register('email', { required: true })} 
        className={`bg-primary text-neutral-400 mt-8 border-b border-secondary p-2 ${errors.email && ' border border-red-400'}`}
        placeholder='Email'
        type='text' 
        name='email'
      />

      {errors.email && <p className='text-left h-4 text-red-500 text-xs'>{errors.email.message}</p>}
    
      <input 
        {...register('phone', { required: true })} 
        className={`bg-primary text-neutral-400 mt-8 border-b border-secondary p-2 ${errors.phone && ' border border-red-400'}`}
        placeholder='WhatsApp'
        type='tel' 
        name='phone'
        value={phoneNumber}
        onChange={handleInputChange}
      />

      {errors.phone && <p className='text-left h-4 text-red-500 text-xs'>{errors.phone.message}</p>}
    
      <textarea 
        {...register('message', { pattern: /\d+/ })} 
        className={`bg-primary text-neutral-400 mt-8 border-b border-secondary p-2 h-40 ${errors.message && ' border border-red-400'}`}
        placeholder='Mensagem'
        name='message'
      />

      {errors.message && <p className='text-left h-4 text-red-500 text-xs'>{errors.message.message}</p>}

        <Button type="submit" className='bg-target mt-8 hover:bg-secondary self-center w-[40%] min-w-[150px]'>
          Enviar mensagem
        </Button>
    </form>
  )
}