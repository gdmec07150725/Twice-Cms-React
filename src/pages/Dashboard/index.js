import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo } from '@/actions/user'; 

@connect(state => ({
  weatherInfo: state.weatherInfo
}))
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    this.props.dispatch(
      fetchUserInfo({cityCode: 101280101,})
    )
  }
  render() {
    const { weatherInfo } = this.props;
    console.log('weatherInfo', weatherInfo);
    return (
      <div>
        weatherInfo
      </div>
    )
  }
}

export default Dashboard;
