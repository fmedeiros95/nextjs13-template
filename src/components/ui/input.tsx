import { cn } from '~/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export function Input({ hasError, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={cn(
        'block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
        {
          'ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600': !hasError,
          'ring-2 ring-rose-400': hasError,
          'bg-gray-50 text-gray-500': props.disabled,
        },
        props?.className
      )}
    />
  );
}
