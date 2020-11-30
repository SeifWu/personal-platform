import React from 'react';

import { MenuItem as MenuItemD } from '../../data';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import useStyles from './styles';

interface SubMenuItemProps {
  level: number;
  menuData: MenuItemD;
}

const SubMenuItem: React.FC<SubMenuItemProps> = ({ menuData, level = 0 }) => {
  const classes = useStyles({});
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment >
      {/* @ts-ignore 忽略 classes[`nested-${level}`] 错误 */}
      <ListItem button className={classes[`nested-${level}`]} onClick={menuData.children ? handleClick : () => { }}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary={menuData.title} />
        {
          menuData.children ? (open ? <ExpandLess /> : <ExpandMore />) : null
        }
      </ListItem>
      {
        menuData.children ?
          <Collapse in={open} timeout="auto" unmountOnExit>
            {
              menuData.children.map(item => {
                return (
                  <SubMenuItem key={item.id} menuData={item} level={level + 1} />
                )
              })
            }
          </Collapse>
          : null
      }
    </React.Fragment>
  )
}

export default SubMenuItem;
