import React, { useState } from 'react';
import classNames from 'classNames';
import { Container, Grid } from '@material-ui/core';
import MenuItem from './MenuItem';

import useStyles from './styles';
import { MenuItem as MenuItemData, IProps } from './data.d';

function listToTree(list: Array<MenuItemData>) {
  let info = list.reduce((map: any, node: MenuItemData) => (map[node.id] = node, node.children = [], map), {})
  return list.filter(node => {
    info[node.pid] && info[node.pid].children.push(node)
    return !node.pid
  })
}

const Navbar: React.FC<IProps> = ({ menuData }) => {

  const classes = useStyles();

  const dataSource = listToTree(menuData)

  const renderMenuItem = (data: Array<MenuItemData>, level = 0) => {
    return data.map(item => {
      return (
        <React.Fragment key={item.id}>
          <li className={`${classes['nav-item']} ${classes['dropdown']}`}>
            <a
              className={`${classes['nav-link']} ${classes['dropdown-toggle']}`}
              href={item.to}
            >
              <span style={{ verticalAlign: "middle" }} className="va-middle">{item.title}</span>
            </a>
            {
              item.children ? renderMenuItemNode(item.children, level + 1) : null
            }
          </li>
        </React.Fragment>
      )
    })
  }

  // 最多支持三级菜单
  const renderMenuItemNode = (data: Array<MenuItemData>, level: number) => {

    return (
      <div className={`${classes['dropdown-menu']}`}>
        {
          data.map(item => {
            return (
              <a key={item.id} className={classNames(`${classes['dropdown-item']}`)} href="#basic">
                <i className="fas fa-box-open mr-5"></i>
                <span>{item.to}</span>
              </a>
            )
          })
        }
      </div>
    )
  };


  // if (item.children?.length) {
  //   return (
  //     <div key={item.id} className="row" style={{ position: 'relative' }}>
  //       <div className="col-lg-4 sub-menu">
  //         <a className="dropdown-item" href="templates/landing-page.html"><i className="fas fa-images mr-5"></i> <span>Landing Pagexsxsedwedewdewdwexsxsedwedewdewdwexsxsedwedewdewdwexsxsedwedewdewdwe</span></a>
  //         <a className="dropdown-item" href="templates/portfolio.html"><i className="fas fa-th-large mr-5"></i> <span>Portfolio</span></a>
  //         <a className="dropdown-item" href="templates/single-project.html"><i className="fas fa-briefcase mr-5"></i> <span>Single Project</span></a>
  //         <a className="dropdown-item" href="templates/blog.html"><i className="fas fa-list mr-5"></i> <span>Blog</span></a>
  //       </div>
  //       <div className="col-lg-4 sub-menu">
  //         <a className="dropdown-item" href="templates/single-post.html"><i className="fas fa-edit mr-5"></i> <span>Single Post</span></a>
  //         <a className="dropdown-item" href="templates/ecommerce.html"><i className="fas fa-shopping-cart mr-5"></i> <span>eCommerce</span></a>
  //         <a className="dropdown-item" href="templates/single-product.html"><i className="fas fa-tag mr-5"></i> <span>Single Product</span></a>
  //         <a className="dropdown-item" href="templates/about-us.html"><i className="fas fa-users mr-5"></i> <span>About Us</span></a>
  //       </div>
  //       <div className="col-lg-4 sub-menu">
  //         <a className="dropdown-item" href="templates/services.html"><i className="fas fa-star mr-5"></i> <span>Services</span></a>
  //         <a className="dropdown-item" href="templates/my-account.html"><i className="fas fa-user mr-5"></i> <span>My Account</span></a>
  //         <a className="dropdown-item" href="templates/404.html"><i className="fas fa-unlink mr-5"></i> <span>404 Page</span></a>
  //         <a className="dropdown-item" href="templates/login-register.html"><i className="fas fa-sign-in-alt mr-5"></i> <span>Login</span></a>
  //       </div>
  //     </div>
  //   )
  // }
  return (
    <nav className={classes["main-nav"]}>
      <Container maxWidth="lg" classes={{ root: classes['container'] }}>
        <a className={classes['navbar-brand']} href="/">
          <img src="/logo.png" alt="" />
          <span>test</span>
        </a>

        <div className={classNames(`${classes['collapse']}`, `${classes['navbar-collapse']}`)} id="navbar-toggle">
          <ul className={classNames(`${classes['navbar-nav']}`, `${classes['ml-auto']}`)}>
            {renderMenuItem(dataSource)}
          </ul>

          <ul className="navbar-button p-0 m-0 ml-30">
            <li className="nav-item">
              <a href="https://wrapbootstrap.com/theme/rise-bootstrap-ui-kit-WB0H06BL4" className="btn btn-sm btn-primary-gradient"><i className="fas fa-shopping-cart fs-12 mr-5"></i> <span>BUY NOW</span></a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar;
