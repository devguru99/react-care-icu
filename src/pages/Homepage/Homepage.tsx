import * as React from 'react';
import Hero from '@/components/Hero';
import Different from '@/components/Homepage/Different';
import Expect from '@/components/Homepage/Expect';
import Future from '@/components/Homepage/Future';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div>
        <Different />
        <Expect />
        <Future />
      </div>
    </>
      
  );
}
