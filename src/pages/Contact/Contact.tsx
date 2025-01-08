import * as React from 'react';

import Form from '@/components/Contact/Form';
import Top from '@/components/Contact/Top';
import Social from '@/components/Contact/Social';
import Meta from '@/components/Meta';


export default function Contact() {
  return (
    <>
      <Meta title="Contact Us" />
      <Top />
      <div>
        <Form />
        <Social />
      </div>
    </>
      
  );
}
