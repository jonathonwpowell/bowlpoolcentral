import React from "react";
import Typography from "@material-ui/core/Typography";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="h5" gutterBottom component="h2">
          Welcome to Bowl Pool Central
        </Typography>
        <Typography component="div">
          Thanks for participating in the bowl pool this year! Please make your
          picks by selecting the picks option on the left and filling out the
          google form
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom component="h2">
          Payment
        </Typography>
        <Typography component="div">
          The cost is $5 to enter, you can either pay with Paypal or mail in a
          check. Paypal is $5.50 as Paypal takes a cut. Please remember to pay:
          the director has a hard time covering payment for everyone.{" "}
          <b>
            Entries must be received by the first game Dec. 15th at 12:00 PM
          </b>
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom component="h2">
          Details
        </Typography>
        <Typography component="div">
          Please see the Rules section for the full rules and regulations
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom component="h2">
          The Party
        </Typography>
        <Typography component="div">
          Details to come. We are planning on having the party on New Year’s day
          this year at Cameron’s address at 8513 Riddle place Raleigh 27615.
          Party details pending.
        </Typography>
      </div>
    );
  }
}

export default HomePage;
