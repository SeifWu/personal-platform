import React from 'react';
import List from '@material-ui/core/List';

import { MenuItem as MenuItemD } from '../../data';
import SubMenuItem from '../SubMenuItem';

import useStyles from './styles';

interface MenuItemProps {
  item: MenuItemD;
}

/**
 * 菜单样式最多支持 3 层
 */
const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const classes = useStyles({});

  const renderMenuItemNode = (data: Array<MenuItemD>) => {
    return data.map(item => {
      return (
        <React.Fragment key={item.id} >
          <SubMenuItem menuData={item} level={0} />
        </React.Fragment>
      )
    })
  }

  return (
    <div className={classes.dropdown} style={{ padding: '35px 25px', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '.04rem' }}>
      {item.title}
      {
        item.children ?
          <div className={classes.dropdownMenu}>
            <List
              component="nav"
              className={classes.root}
            >
              {renderMenuItemNode(item.children)}
            </List>
          </div>
          : null
      }
    </div>
  )
}

export default MenuItem;
