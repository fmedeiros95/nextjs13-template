import { cn } from '~/lib/utils';

export interface CardStatisticProps {
  name: string;
  stat: string;
  textColor?: string;
}

export const CardStatistic = (props: CardStatisticProps) => {
  return (
    <div className='overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6'>
      <dt className='truncate text-sm font-medium text-gray-500 uppercase'>{props.name}</dt>
      <dd className={cn('mt-1 text-2xl font-semibold tracking-tight text-gray-900', props.textColor)}>{props.stat}</dd>
    </div>
  );
};
