import React, { ReactNode } from 'react';
import useStyles from './styles';
import classNames from 'classNames';
import { MenuItem as MenuItemData } from './data';

interface ItemProps {
  data?: MenuItemData;
  level: number;
  // children?: MenuItemData;
}


// 只支持 3 级菜单
const MenuItem: React.FC<ItemProps> = ({ data, level, children }) => {
  const classes = useStyles();
  console.log(data)
  if (level === 1) {
    console.log("level === 1")
    return (
      <div className={classNames({ [`${classes['dropdown-menu']}`]: true, [`${classes['show']}`]: false })}>
        <a className={classNames(`${classes['dropdown-item']}`)} href="#basic">
          <i className="fas fa-box-open mr-5"></i> <span>Basic Components</span>
        </a>
        <a className={classNames(`${classes['dropdown-item']}`)} href="#basic">
          <i className="fas fa-box-open mr-5"></i> <span>Navigation</span>
        </a>
        <a className={classNames(`${classes['dropdown-item']}`)} href="#basic">
          <i className="fas fa-box-open mr-5"></i> <span>Forms</span>
        </a>
        <a className={classNames(`${classes['dropdown-item']}`)} href="#basic">
          <i className="fas fa-box-open mr-5"></i> <span>Cards</span>
        </a>
        <a className={classNames(`${classes['dropdown-item']}`)} href="#basic">
          <i className="fas fa-box-open mr-5"></i> <span>Extras</span>
        </a>
      </div>
    )
  }
  if (level === 2) {
    return null;
  }
  return null;

  // console.log(level)
  // return (
  //   <>
  //     <li className={`${classes['nav-item']} ${classes['dropdown']}`}>
  //       <a
  //         className={`${classes['nav-link']} ${classes['dropdown-toggle']}`}
  //         href={data.to}
  //       >
  //         <i className="fas fa-archive mr-5 fs-16 va-middle"></i>
  //         <span style={{ verticalAlign: "middle" }} className="va-middle">{data.title}</span>
  //       </a>
  //     </li>
  //     {children}
  //   </>
  // )
}

export default MenuItem
