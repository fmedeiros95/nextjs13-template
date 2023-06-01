import { AuthLoginForm } from '~/components/forms';
import { AuthHeader } from '~/components/layout/auth';

export const metadata = {
  title: 'Login',
};

export default function Login() {
  return (
    <>
      <AuthHeader title={'Área Restrita'} subtitle={'Acesse sua conta para continuar.'} />

      <div className='mt-10'>
        <AuthLoginForm />
      </div>
    </>
  );
}
