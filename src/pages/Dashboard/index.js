import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUserInfo } from '@/actions/user'; 

@connect(state => ({
  weatherInfo: state.userInfo.weatherInfo.weatherinfo,
  loading: state.userInfo.loading
}))
class Dashboard extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      
    }
  }

  componentDidMount() {
    this.props.dispatch(
      fetchUserInfo({cityCode: 101280101})
    )
  }
  render() {
    const { weatherInfo: { city, weather, temp1, temp2 } = {}, loading } = this.props;
    const renderContent = () => {
      return (
        loading ? (
          <span>
            开始请求广州天气数据...
          </span>
        ) : (
          <span>
            {city} {weather} 最低气温 {temp1} 最高气温 {temp2}
          </span>
        )
      )
    }
    return (
        <div>
          { renderContent() }
        </div>
    )
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     loadGuangzhouWeather: () => {
//       dispatch(fetchUserInfo({cityCode: 101280101}));
//     }
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   const { userInfo: { weatherInfo: { weatherinfo } = {}, loading } = {} } = state;
//   return {
//     weatherInfo: weatherinfo,
//     loading
//   }
// }
export default Dashboard;
