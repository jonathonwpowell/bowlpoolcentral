import React, { Component } from "react";
import Chart from "react-google-charts";
import { getWinsBarData } from "../common/helper";

class WinsBar extends Component {
  render() {
    const { bowlPool } = this.props;
    if (bowlPool.games) {
      return (
        <Chart
          width={"80vw"}
          height={"80vh"}
          chartType="Histogram"
          loader={<div>Loading Chart</div>}
          data={getWinsBarData(bowlPool)}
          options={{
            histogram: {
              bucketSize: 2
            },
            title: "Points Histogram",
            hAxis: {
              title: "Points"
            },
            vAxis: {
              title: "Frequency"
            },
            chartArea: { left: 60, width: "85%" },
            legend: { position: "none" }
          }}
        />
      );
    }
    return <div />;
  }
}

export default WinsBar;
