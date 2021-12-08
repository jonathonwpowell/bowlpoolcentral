/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import constants from "../common/constants";

class RulesPage extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          marginTop: "-80px",
          marginLeft: "-80px"
        }}
      >
        <iframe
          style={{
            width: "100%",
            height: "1500px",
            border: "0",
            minWidth: "500px"
          }}
          src={constants.rulesUrl}
        />
      </div>
    );
  }
}

export default RulesPage;
