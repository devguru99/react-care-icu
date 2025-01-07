import * as React from 'react';
import Top from '@/components/Story/Top';
import Banner from '@/components/Story/Banner';
import Trust from '@/components/Story/Trust';
import Stories from '@/components/Story/Stories';
import Testimonial from '@/components/Story/Testimonial';
import Share from '@/components/Story/Share';

export default function Story() {
  return (
    <>
      <Top />
      <div>
        <Testimonial />
        <Stories />
        <Share />
        <Trust />
        <Banner />
      </div>
    </>
      
  );
}
