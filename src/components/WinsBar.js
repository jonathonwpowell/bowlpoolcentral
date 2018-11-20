import React, { Component } from 'react';
import Chart from 'react-google-charts';
import { getWinsBarData } from "../common/helper";

class WinsBar extends Component {

  render() {
    const {bowlPool} = this.props
    if (bowlPool.games) {
      return <Chart
            width={'500px'}
            height={'1000px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data = {getWinsBarData(bowlPool)}
            options={{
                title: 'Wins by Player',
                hAxis: {
                title: 'Wins',
                minValue: 0,
                },
                vAxis: {
                title: 'Player Name',
                },
            }}
      />
    }
    return (
      <div></div>
    );
  }
}

export default WinsBar