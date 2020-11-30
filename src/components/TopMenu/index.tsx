import React from 'react';
import { Container } from '@material-ui/core';

import { TopMenuProps } from './data';
import listToTree from '../../utils/listToTree';
import Title from './components/Title';
import MenuItem from './components/MenuItem';
import styles from './styles';

const TopMenu: React.FC<TopMenuProps> = ({ title, logoUrl, menuData }) => {
  const cls = styles();
  const menuDataSource = listToTree(menuData);
  return (
    <React.Fragment>
      <Container
        disableGutters // 删除左右填充
        classes={{
          root: cls.container,
        }}
      >
        <Title title={title} logoUrl={logoUrl} />
        <div style={{ flexDirection: 'row', display: 'flex', marginLeft: 'auto', }}>
          {
            menuDataSource.map(item => {
              return (
                <MenuItem key={item.id} item={item} />
              )
            })
          }
        </div>
      </Container>
    </React.Fragment>
  )
}

export default TopMenu;
