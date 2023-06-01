import Link from 'next/link';
import { AuthForgotPasswordForm } from '~/components/forms';
import { AuthHeader } from '~/components/layout/auth';

export const metadata = {
  title: 'Esqueceu sua senha?',
};

export default function ForgotPassword() {
  return (
    <>
      <AuthHeader title={'Esqueceu sua senha?'} subtitle={<>Entre com seu e-mail e enviaremos um link para você redefinir sua senha.</>} />

      <div className='mt-10'>
        <AuthForgotPasswordForm />

        <div className='mt-6 text-center'>
          <span className='text-sm text-gray-600'>
            Lembrou da senha?{' '}
            <Link href='/login' className='text-sm font-semibold text-indigo-600 hover:text-indigo-500'>
              Voltar para o login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
