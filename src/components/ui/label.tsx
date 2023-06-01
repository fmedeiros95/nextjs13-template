import { cn } from '~/lib/utils';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export function Label({ children, ...props }: LabelProps) {
  return (
    <label {...props} className={cn('block text-sm font-medium leading-6', props.className)}>
      {children}
    </label>
  );
}
