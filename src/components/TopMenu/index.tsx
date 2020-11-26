import React from 'react';
import { Container } from '@material-ui/core';

import { TopMenuProps } from './data';
import Title from './components/Title';
import styles from './styles';

const TopMenu: React.FC<TopMenuProps> = ({ title, logoUrl }) => {
  const cls = styles();

  return (
    <React.Fragment>
      <Container
        disableGutters // 删除左右填充
        classes={{
          root: cls.container,
        }}
      >
        <Title title={title} logoUrl={logoUrl} />
      </Container>
    </React.Fragment>
  )
}

export default TopMenu;
