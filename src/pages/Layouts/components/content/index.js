import React, { Component } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

class LayoutContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          height: '100%'
        }}
      >
        { children }
      </Content>
    )
  }
};

export default LayoutContent;
