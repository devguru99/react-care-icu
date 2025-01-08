import * as React from 'react';
import Top from '@/components/Resource/Top';
import Banner from '@/components/Resource/Banner';
import Access from '@/components/Resource/Access';
import Resources from '@/components/Resource/Resource';
import Meta from '@/components/Meta';

export default function Resource() {
  return (
    <>
      <Meta title="Resources" />
      <Top />
      <div>
        <Resources />
        <Access />
        <Banner />
      </div>
    </>
      
  );
}
