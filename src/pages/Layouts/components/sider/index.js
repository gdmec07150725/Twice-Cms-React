import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import allMenu from "@/routes";
import "./index.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

class MenuSider extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      optionKeys: []
    }
  }
  subMenuTitle = subMenu => (
    <span>
      <Icon type={subMenu.icon} />
      <span>{subMenu.title}</span>
    </span>
  );

  recursiveSubMenu = subMenu => {
    return (
      <SubMenu key={subMenu.path} title={this.subMenuTitle(subMenu)}>
        {subMenu.children.map(menu => {
          if (!menu.hidden && menu.children && menu.children.length > 0) {
            return this.recursiveSubMenu(menu);
          }
          
          return (
            <Menu.Item key={menu.path}>
              <Link to={menu.path}>{menu.title}</Link>
            </Menu.Item>
          )
        })}
      </SubMenu>
    );
  };

  recursiveOptionKeys = (menu = allMenu, selectedKey) => {
    const optionKeys = [];
    menu.forEach(subMenu => {
      if (!subMenu.hidden && subMenu.children && subMenu.children.length > 0) {
        subMenu.children.forEach(childMenu => {
          if (!childMenu.hidden && childMenu.children && childMenu.children.length > 0) {
            return this.recursiveOptionKeys(childMenu);
          }
          if (!childMenu.hidden && childMenu.path === selectedKey) {
            optionKeys.push(subMenu.path)
          }
        })
      }
    })
    return optionKeys;
  }

  render() {
    const { collapsed } = this.props;
    const selectedKey = window.location.pathname;
    const openKey = this.recursiveOptionKeys(allMenu, selectedKey);
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="NavSider"
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={openKey}
          defaultSelectedKeys={[selectedKey]}
          className="menu"
        >
          {allMenu.map(subMenu => {
            if (
              !subMenu.hidden &&
              subMenu.children &&
              subMenu.children.length > 0
            ) {
              return this.recursiveSubMenu(subMenu);
            } else if (!subMenu.hidden) {
              return (
                <Menu.Item key={subMenu.path}>
                  <Link to={subMenu.path}>
                    <Icon type={subMenu.icon} />
                    <span className="nav-text">{subMenu.title}</span>
                  </Link>
                </Menu.Item>
              );
            }
            return ''
          })}
        </Menu>
      </Sider>
    );
  }
}

export default MenuSider;
