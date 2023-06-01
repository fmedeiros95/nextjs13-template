import Link from 'next/link';

export default function Home() {
  // Create two buttons to navigate to `Dashboard` and `Transactions` pages.
  return (
    <>
      {/* Create two buttons centered in the page  */}
      <div className='flex flex-col items-center justify-center h-screen gap-y-6'>
        <div>
          <Link
            href='/login'
            className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Login
          </Link>
        </div>
        <div>
          <Link
            href='/commercial'
            className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}
