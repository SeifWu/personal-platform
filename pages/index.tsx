import React from 'react';
import { GetServerSideProps } from 'next';
import Navbar from '../src/components/Navbar';
import { MenuItem } from '../src/components/Navbar/data';
import TopMenu from '../src/components/TopMenu';

const navbar: Array<MenuItem> = [
  {
    id: 1,
    pid: 0,
    title: '一级',
    to: '/#1',
  },
  {
    id: 2,
    pid: 1,
    title: '二级1',
    to: '/#1-1',
  },
  {
    id: 3,
    pid: 1,
    title: '二级2',
    to: '/#1-2',
  },
  {
    id: 4,
    pid: 1,
    title: '二级3',
    to: '/#1-3',
  },
  {
    id: 5,
    pid: 0,
    title: '一级2',
    to: '/#2',
  },
  {
    id: 6,
    pid: 5,
    title: '二级2',
    to: '/#2-1',
  },
  {
    id: 8,
    pid: 5,
    title: '二级3',
    to: '/#2-2',
  },
  {
    id: 7,
    pid: 6,
    title: '三级1',
    to: '/#3-1',
  },
]

export const getServerSideProps: GetServerSideProps = async (_context) => {
  return {
    props: {
      navbar,
    },
  }
}

export default function Index(props: any) {
  console.log(props)
  return (
    <>
      {/* <Navbar menuData={navbar} /> */}
      <TopMenu menuData={navbar} title="Annie" logoUrl="/logo.png" />
      <div style={{ height: 1000 }}></div>
    </>
  );
}
