'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button, Input, Label } from '~/components/ui';
import yup from '~/lib/yup';

// ** Defining the schema to validate the form
const schema = yup.object().shape({
  password: yup.string().min(8).required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas não conferem')
    .required(),
});

// ** Extracting the type of the schema
type FormData = yup.InferType<typeof schema>;

// ** Default values for the form
const defaultValues: FormData = {
  password: '',
  passwordConfirmation: '',
};

export const AuthResetPasswordForm = () => {
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
    console.log(data);
  };

  return (
    <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name='password'
          control={control}
          render={({ field: { name, value, onChange, onBlur } }) => (
            <>
              <Label>
                <span className='block mb-2'>Nova senha</span>
                <Input placeholder={'•'.repeat(8)} type='password' name={name} value={value} onChange={onChange} onBlur={onBlur} hasError={Boolean(errors.password)} />
              </Label>
              {errors.password && <span className='inline-flex text-sm text-rose-600'>{errors.password?.message}</span>}
            </>
          )}
        />
      </div>
      <div>
        <Controller
          name='passwordConfirmation'
          control={control}
          render={({ field: { name, value, onChange, onBlur } }) => (
            <>
              <Label>
                <span className='block mb-2'>Confirmar nova senha</span>
                <Input placeholder={'•'.repeat(8)} type='password' name={name} value={value} onChange={onChange} onBlur={onBlur} hasError={Boolean(errors.passwordConfirmation)} />
              </Label>
              {errors.passwordConfirmation && <span className='inline-flex text-sm text-rose-600'>{errors.passwordConfirmation?.message}</span>}
            </>
          )}
        />
      </div>

      <div>
        <Button type='submit'>Redefinir senha</Button>
      </div>
    </form>
  );
};
