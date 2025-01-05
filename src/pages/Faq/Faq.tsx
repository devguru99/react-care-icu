import * as React from 'react';
import Top from '@/components/Faq/Top';
import FAQ from '@/components/Faq/FAQ';
import Banner from '@/components/Faq/Banner';

export default function FaqPage() {
  return (
    <>
      <Top />
      <div>
        <FAQ />
        <Banner />
      </div>
    </>
      
  );
}
