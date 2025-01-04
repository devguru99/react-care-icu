import * as React from 'react';

import Banner from '@/components/Homepage/Banner';
import Founder from '@/components/About/Founder';
import Approach from '@/components/About/Approach';


export default function AboutPage() {
  return (
    <>
      <Founder />
      <div>
        <Approach />
        <Banner />
      </div>
    </>
      
  );
}
