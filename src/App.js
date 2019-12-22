import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import router from '@/routes';
import { Spin } from 'antd';

const Login = lazy(() => import('@/pages/Login'));
const Error_404 = lazy(() => import('@/pages/Error/404'));

class App extends Component {

  fallBack = () => {
    return (
      <div className="spin-loading"><Spin tip="Loading..."/></div>
    )
  }

  renderRouter = route => {
    return route.map((item, key) => {
      if (item.redirect) {
        return (<Redirect exact={item.exact} key={key} from={item.path} to={item.redirect} />)
      }
      return (
        <Route path={item.path} key={key} exact={item.exact} render={(props) => {
          // 判断登录状态
          const isLogined = true;
          if (!isLogined) {
            return <Redirect to={'/login'} />
          }
          return (
            // 需要将props参数传回去，不然所有组件props找不到（component=注册时）应有的history、location等属性
            <item.component {...props}>
              {item.children && item.children.length > 0 ? this.renderRouter(item.children) : ''}
            </item.component>
          )
        }}></Route>
      )
    })
  }
  routerView = routers => {
    return (
      <Suspense fallback={this.fallBack()}>
        <Switch>
          <Route path="/login" strict={true} component={Login} />
          { this.renderRouter(routers) }
          <Route component={Error_404} />
        </Switch>
      </Suspense>
    )
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          { this.routerView(router) }
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
