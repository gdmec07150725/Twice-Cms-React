import React, { Component } from 'react';
import { Layout, Icon } from 'antd';

const { Header } = Layout;

class LayoutHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { collapsed, toggle } = this.props;
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
      </Header>
    )
  }
};

export default LayoutHeader;
