import React from 'react';
// import { getStaticProps } from 'next';

import FirstScreen from '../src/components/FirstScreen';
// import { MenuItem } from '../src/components/Navbar/data';
// import TopMenu from '../src/components/TopMenu';

export async function getStaticProps() {
  const res = await fetch('https://seifwu.github.io/mock/api/v1/home.json')
  const ResponseJson = await res.json()
  console.log(ResponseJson)

  return {
    props: {
      ...ResponseJson,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}


export default function Index({ title = '', background = '' }) {

  return (
    <>
      {/* <TopMenu menuData={menuData} title="Annie" logoUrl="/logo.png" /> */}
      <FirstScreen source={background} />
      <div>
        {title}
      </div>
    </>
  );
}
