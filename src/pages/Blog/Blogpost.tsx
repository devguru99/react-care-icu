import * as React from 'react';
import SingleBlog from '@/components/Blogpost/SingleBlog';
import Banner from '@/components/Blogpost/Banner';
import Related from '@/components/Blogpost/Related';
import Meta from '@/components/Meta';

export default function BlogPost() {
  return (
    <>
      <Meta title="Blog" />
      <SingleBlog />
      <div>
        <Related />
        <Banner />
      </div>
    </>
      
  );
}
