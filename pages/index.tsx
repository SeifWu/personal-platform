import React from 'react';
import useSWR from 'swr'
// import { GetServerSideProps } from 'next';

// import { MenuItem } from '../src/components/Navbar/data';
import TopMenu from '../src/components/TopMenu';

// const navbar: Array<MenuItem> =

const fetcher = (url: string) => fetch(url).then((res) => res.json());


export default function Index() {
  const { data, error } = useSWR('/api/menus', fetcher);
  let menuData = []
  if (data) {
    menuData = data.data;
  }
  if (error) {
    console.log("error")
  }
  return (
    <>
      <TopMenu menuData={menuData} title="Annie" logoUrl="/logo.png" />
    </>
  );
}
