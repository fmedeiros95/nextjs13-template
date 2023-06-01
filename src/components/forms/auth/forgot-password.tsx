'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Button, Input, Label } from '~/components/ui';
import yup from '~/lib/yup';

// ** Defining the schema to validate the form
const schema = yup.object().shape({
  email: yup.string().email().required(),
});

// ** Extracting the type of the schema
type FormData = yup.InferType<typeof schema>;

// ** Default values for the form
const defaultValues: FormData = {
  email: '',
};

export const AuthForgotPasswordForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues,
    resolver: yupResolver(schema),
  });

  // ** Handling form submission
  const onSubmit: SubmitHandler<FormData> = async data => {
    setLoading(true);
    const request = axios.post('/api/auth/forgot-password', data);
    toast.promise(request, {
      loading: 'Enviando código de verificação...',
      success: 'Se houver uma conta com esse e-mail, você receberá um e-mail com um código de verificação.',
      error: 'Não foi possível enviar o código de verificação.',
    });
    const response = await request;
    setLoading(false);
    console.log(response);
  };

  return (
    <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name='email'
          control={control}
          render={({ field: { name, value, onChange, onBlur } }) => (
            <>
              <Label>
                <span className='block mb-2'>E-mail</span>
                <Input
                  placeholder='email@exemplo.com.br'
                  type='email'
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  hasError={Boolean(errors.email)}
                  disabled={loading}
                />
              </Label>
              {errors.email && <span className='inline-flex text-sm text-rose-600'>{errors.email?.message}</span>}
            </>
          )}
        />
      </div>
      <div>
        <Button type='submit' disabled={loading}>
          Soliciar redefinição
        </Button>
      </div>
    </form>
  );
};
