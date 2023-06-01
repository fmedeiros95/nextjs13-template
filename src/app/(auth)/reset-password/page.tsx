import Link from 'next/link';
import { AuthResetPasswordForm } from '~/components/forms';
import { AuthHeader } from '~/components/layout/auth';

export const metadata = {
  title: 'Redefinir senha',
};

export default function ResetPassword() {
  return (
    <>
      <AuthHeader title={'Redefinir senha'} subtitle={<>Entre com sua nova senha e confirme.</>} />

      <div className='mt-10'>
        <AuthResetPasswordForm />

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
