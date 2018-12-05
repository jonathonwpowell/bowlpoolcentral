import React from "react";

class PicksPage extends React.Component {
  render() {
    return (
      <div style={{ fontSize: "26px" }}>
        Make your picks{" "}
        <a
          title="Pick Now!"
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/forms/GceQyNighU3nD2h83"
        >
          HERE
        </a>
      </div>
    );
  }
}

export default PicksPage;
