import * as React from 'react';

import Form from '@/components/Contact/Form';
import Top from '@/components/Contact/Top';
import Social from '@/components/Contact/Social';


export default function Contact() {
  return (
    <>
      <Top />
      <div>
        <Form />
        <Social />
      </div>
    </>
      
  );
}
