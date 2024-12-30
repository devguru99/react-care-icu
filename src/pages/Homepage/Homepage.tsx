import * as React from 'react';
import Divider from '@mui/material/Divider';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import Different from '@/components/Homepage/Different';
import Expect from '@/components/Homepage/Expect';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div>
        <Different />
        <Expect />
        <Divider />
        <FAQ />
        <Divider />
      </div>
    </>
      
  );
}
