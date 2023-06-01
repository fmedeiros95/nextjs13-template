/* eslint-disable @typescript-eslint/no-unused-vars */
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
  children: React.ReactNode;
}

export function Select({ children, hasError, ...props }: SelectProps) {
  return <select {...props}>{children}</select>;
}
