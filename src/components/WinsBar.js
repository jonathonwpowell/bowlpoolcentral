import React, { Component } from "react";
import Chart from "react-google-charts";
import { getWinsBarData } from "../common/helper";

class WinsBar extends Component {
  render() {
    const { bowlPool } = this.props;
    if (bowlPool.games) {
      return (
        <Chart
          width={"85vw"}
          height={"80vh"}
          chartType="Histogram"
          loader={<div>Loading Chart</div>}
          data={getWinsBarData(bowlPool)}
          options={{
            histogram: {
              bucketSize: 2
            },
            title: "Standings",
            hAxis: {
              title: "Wins"
            },
            vAxis: {
              title: "Frequency"
            },
            legend: { position: "none" }
          }}
        />
      );
    }
    return <div />;
  }
}

export default WinsBar;
