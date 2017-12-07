import React from 'react';
import { connect } from 'dva';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import styles from './MenuBar.css';

const SubMenu = Menu.SubMenu;

function MenuBar({ menus }) {
  return (
    <div className={styles.normal}>
      <Menu
        defaultSelectedKeys={menus.defaultSelectedKeys}
        mode="inline"
        inlineIndent={8}
      >
        {menus.subMenus.map(subMenu => (
          <SubMenu
            key={subMenu.key}
            title={<span><Icon type={subMenu.icon} /><span>{subMenu.title}</span></span>}
          >
            {subMenu.items.map(item => (
              <Menu.Item key={item.key}>
                <Link to={item.route || '#'}>
                  {item.icon && <Icon type={item.icon} />}
                  {item.title}
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>

    </div>
  );
}

function mapStateToProps(state) {
  return {
    menus: state.menu.menus,
  };
}

export default connect(mapStateToProps)(MenuBar);
