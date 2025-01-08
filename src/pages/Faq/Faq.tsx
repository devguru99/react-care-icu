import * as React from 'react';
import Top from '@/components/Faq/Top';
import FAQ from '@/components/Faq/FAQ';
import Banner from '@/components/Faq/Banner';
import Meta from '@/components/Meta';

export default function FaqPage() {
  return (
    <>
      <Meta title="FAQ" />
      <Top />
      <div>
        <FAQ />
        <Banner />
      </div>
    </>
      
  );
}
