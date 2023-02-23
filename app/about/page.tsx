import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className='flex flex-col h-screen bg-black'>
      <div className='m-auto cursor-default'>
        <div className='text-4xl'>
          Welcome to{' '}
          <a
            href='https://nextjs.org'
            className='font-semibold hover:text-blue-500'
          >
            Next.js 13!
          </a>
        </div>
        <div className='text-xl'>
          This is a Tailwind Example with Next.js 13
        </div>
      </div>
      <div className='bg-white p-6 text-center'>
        <span className='flex justify-center'>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </div>
    </div>
  );
}
