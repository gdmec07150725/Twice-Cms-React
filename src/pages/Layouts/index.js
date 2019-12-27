import React, { Component } from 'react';
import { Layout } from 'antd';
import MenuSider from './components/sider/index.js';
import Header from './components/header/index.js';
import Content from './components/content/index.js'
import './index.css';

class Layouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  };

  render() {
    const { collapsed } = this.state;
    const { children } = this.props;
    return (
      <Layout className="container">
        <MenuSider collapsed={collapsed}/>
        <Layout>
          <Header collapsed={collapsed} toggle={this.toggle}/>
          <Content children={children}/> 
        </Layout>
      </Layout>
    )
  }
}

export default Layouts;
