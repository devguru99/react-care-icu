import * as React from 'react';
import Top from '@/components/Blogs/Top';
import Banner from '@/components/Blogs/Banner';
import Featured from '@/components/Blogs/Featured';
import Latest from '@/components/Blogs/Latest';

export default function BlogsPage() {
  return (
    <>
      <Top />
      <div>
        <Featured />
        <Latest />
        <Banner />
      </div>
    </>
      
  );
}
