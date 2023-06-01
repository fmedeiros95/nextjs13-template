import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function HeaderSearch() {
  return (
    <form className='relative flex flex-1' onSubmit={e => e.preventDefault()}>
      <label htmlFor='search-field' className='sr-only'>
        Buscar
      </label>
      <MagnifyingGlassIcon className='pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400' aria-hidden='true' />
      <input
        id='search-field'
        className='block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm'
        placeholder={'Buscar...'}
        type='search'
        name='search'
      />
    </form>
  );
}
