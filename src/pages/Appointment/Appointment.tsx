import * as React from 'react';

import Top from '@/components/Appointment/Top';
import Social from '@/components/Contact/Social';
import Meta from '@/components/Meta';


export default function Appointment() {
  return (
    <>
      <Meta title="Book an Appointment" />
      <Top />
      <div>
        <Social />
      </div>
    </>
      
  );
}
