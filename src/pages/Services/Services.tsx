import * as React from 'react';
import Top from '@/components/Services/Top';
import Banner from '@/components/Services/Banner';
import Choose from '@/components/Services/Choose';
import Service from '@/components/Services/Service';
import Meta from '@/components/Meta';

export default function Services() {
  return (
    <>
      <Meta title="Services" />
      <Top />
      <div>
        <Service />
        <Choose />
        <Banner />
      </div>
    </>
      
  );
}
