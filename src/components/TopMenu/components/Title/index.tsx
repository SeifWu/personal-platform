import React from 'react';
import Link from 'next/link';

import { TitleProps } from './data';
import styles from './styles';

const Title: React.FC<TitleProps> = ({ title, logoUrl }) => {
  const cls = styles();

  return (
    <Link href="/" >
      <a className={cls.navbarBrand} >
        <img src={logoUrl} alt={title} />
        <span>{title}</span>
      </a>
    </Link>

  )
};

export default Title;
