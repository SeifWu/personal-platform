import React from 'react';
import Link from 'next/link';

import { TitleProps } from './data';
import styles from './styles';

const Title: React.FC<TitleProps> = ({ title }) => {
  const cls = styles();

  return (
    <Link href="/" >
      <a className={cls.navbarBrand} >
        <img src="/logo.png" alt="" />
        <span>{title}</span>
      </a>
    </Link>

  )
};

export default Title;
