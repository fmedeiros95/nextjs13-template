import { CardStatistic, CardStatisticProps } from '../cards';
import { SectionTitle } from '../layout/panel';

const stats: CardStatisticProps[] = [
  { name: 'Disponível na conta', stat: 'R$ 100,00', textColor: 'text-green-600' },
  { name: 'A receber', stat: 'R$ 3.570,95', textColor: 'text-yellow-600' },
  { name: 'Total', stat: 'R$ 3.670,95', textColor: 'text-indigo-600' },
];

export const AccountSummary = () => {
  return (
    <>
      <SectionTitle>Meu Saldo</SectionTitle>
      <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3'>
        {stats.map(stat => (
          <CardStatistic key={stat.name} {...stat} />
        ))}
      </dl>
    </>
  );
};
