import * as React from 'react';
import SingleBlog from '@/components/Blogpost/SingleBlog';
import Banner from '@/components/Blogpost/Banner';
import Related from '@/components/Blogpost/Related';

export default function BlogPost() {
  return (
    <>
      <SingleBlog />
      <div>
        <Related />
        <Banner />
      </div>
    </>
      
  );
}
