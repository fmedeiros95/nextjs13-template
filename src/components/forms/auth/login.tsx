'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Button, Input, Label } from '~/components/ui';
import { useAuth } from '~/hooks';
import { apiInternalClient } from '~/lib/api';
import yup from '~/lib/yup';

// ** Defining the schema to validate the form
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  remember: yup.boolean().optional(),
});

// ** Extracting the type of the schema
type FormData = yup.InferType<typeof schema>;

// ** Response type
interface FormResponse {
  redirectURL: string;
  userData: any;
}

// ** Default values for the form
const defaultValues: FormData = {
  email: '',
  password: '',
  remember: false,
};

export const AuthLoginForm = () => {
  // ** Hooks
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const router = useRouter();

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
    // ** Setting the loading state
    setLoading(true);

    // ** Making the request
    const request = apiInternalClient.post<FormResponse>('/api/auth/login/', data);

    // ** Using react-hot-toast to handle the request
    toast.promise(request, {
      loading: 'Validando seus dados...',
      success: 'Login efetuado com sucesso!',
      error: (err: any) => {
        if (err?.response?.data?.message) return err.response.data.message;

        return 'Houve um erro ao efetuar o login, tente novamente mais tarde.';
      },
    });

    try {
      // ** Handling the response
      const { data } = await request;

      // ** Saving the user data in the localstorage
      localStorage.setItem('user', JSON.stringify(data.userData));

      // ** Setting the user in the context
      setUser(data.userData);

      // ** Redirecting the user
      router.push(data.redirectURL);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
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
                  autoFocus
                />
              </Label>
              {errors.email && <span className='inline-flex text-sm text-rose-600'>{errors.email?.message}</span>}
            </>
          )}
        />
      </div>
      <div>
        <Controller
          name='password'
          control={control}
          render={({ field: { name, value, onChange, onBlur } }) => (
            <>
              <Label>
                <span className='block mb-2'>Senha</span>
                <Input
                  placeholder={'•'.repeat(8)}
                  type='password'
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  hasError={Boolean(errors.password)}
                  disabled={loading}
                />
              </Label>
              {errors.password && <span className='inline-flex text-sm text-rose-600'>{errors.password?.message}</span>}
            </>
          )}
        />
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Controller
            name='remember'
            control={control}
            render={({ field: { name, value, onChange, onBlur } }) => (
              <>
                <Label htmlFor='remember' className='block text-sm leading-6 text-gray-700'>
                  <Input
                    type='checkbox'
                    id='remember'
                    name={name}
                    checked={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className='inline-block mr-3 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    disabled={loading}
                  />
                  Manter conectado
                </Label>
              </>
            )}
          />
        </div>

        <div className='text-sm leading-6'>
          <Link href='/forgot-password' className='font-semibold text-indigo-600 hover:text-indigo-500'>
            Esqueci minha senha?
          </Link>
        </div>
      </div>

      <div>
        <Button type='submit' disabled={loading}>
          Acessar
        </Button>
      </div>
    </form>
  );
};
