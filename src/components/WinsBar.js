import React, { Component } from 'react';
import Chart from 'react-google-charts';
import config from "../common/api-config";
import { load } from "../common/spreadsheet";
import { getWinsBarData } from "../common/helper";
class WinsBar extends Component {

  state = {
    bowlPool: {},
    error: null
  }

  render() {
    const {bowlPool, error} = this.state
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

  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.initClient);
  }

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
      // 3. Initialize and make the API request.
      load(this.onLoad);
    });
  };

  onLoad = (data, error) => {
    if (data) {
      const bowlPool = data.bowlPool;
      this.setState({ bowlPool });
    } else {
      this.setState({ error });
    }
  };
}

export default WinsBar