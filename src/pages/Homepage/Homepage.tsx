import * as React from 'react';
import Divider from '@mui/material/Divider';
import Hero from '@/components/Hero';
import LogoCollection from '@/components/LogoCollection';
import Highlights from '@/components/Highlights';
import Pricing from '@/components/Pricing';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Different from '@/components/Homepage/Different';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div>
        <Different />
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
      </div>
    </>
      
  );
}
