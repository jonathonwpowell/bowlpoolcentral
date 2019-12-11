/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

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
          src="https://docs.google.com/document/d/e/2PACX-1vQqwskChG3xngeC12VwykENXzj5P_gevPZdm42wiGrUYxuvOGEHTOFdH2UkWYVnWGwSV9qGhcqvvXrG/pub?embedded=true"
        />
      </div>
    );
  }
}

export default RulesPage;
