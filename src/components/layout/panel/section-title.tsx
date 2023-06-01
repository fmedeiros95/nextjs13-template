interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return <h3 className='text-base font-semibold leading-6 text-gray-900 pb-2 border-b'>{children}</h3>;
};
