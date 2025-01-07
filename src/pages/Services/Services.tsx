import * as React from 'react';
import Top from '@/components/Services/Top';
import Banner from '@/components/Services/Banner';
import Choose from '@/components/Services/Choose';
import Service from '@/components/Services/Service';

export default function Services() {
  return (
    <>
      <Top />
      <div>
        <Service />
        <Choose />
        <Banner />
      </div>
    </>
      
  );
}
