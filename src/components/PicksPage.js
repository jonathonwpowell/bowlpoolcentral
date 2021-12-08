import React from "react";
import constants from "../common/constants";

class PicksPage extends React.Component {
  render() {
    return (
      <div style={{ fontSize: "26px" }}>
        Make your picks{" "}
        <a
          title="Pick Now!"
          target="_blank"
          rel="noopener noreferrer"
          href={constants.pickUrl}
        >
          HERE
        </a>.  Must be completed by {constants.firstGameTime}
      </div>
    );
  }
}

export default PicksPage;
