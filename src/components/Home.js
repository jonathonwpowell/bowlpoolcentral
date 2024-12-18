import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import constants from "../common/constants";

class HomePage extends React.Component {
  render() {
    return (
      <div style={{maxWidth: '900px', margin: 'auto'}}>
        <Typography variant="h5" gutterBottom component="h2">
          Welcome to Bowl Pool Central
        </Typography>
        <Typography component="div">
          Thanks for participating in the bowl pool this year! Please make your
          picks by filling out{" "}
          <a
            title="Pick URL"
            target="_blank"
            rel="noopener noreferrer"
            href={constants.pickUrl}
          >
          this form
          </a>.{" "}
          <b>
            Entries must be received by the first game {constants.firstGameTime}
          </b>
          <p>
            <Button variant="contained" className="pick-button" href={constants.pickUrl}>
              Make Your Picks!
            </Button>
          </p>
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom component="h2">
          Payment
        </Typography>
        <Typography component="div">
          The cost is $5 to enter, you can either pay with Paypal, Venmo, or mail in a
          check. Paypal is $5.50 as Paypal takes a cut. Please remember to pay,
          the director has a hard time covering payment for everyone.  Click on the payment
          menu item to pay.{" "}
          <b>
            Entries must be received by the first game {constants.firstGameTime}
          </b>
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom component="h2">
          Seeing Picks, Standings, and the schedule
        </Typography>
        <Typography component="div">
          Use the different menu options to see your picks, compare your picks to your competitors, the current standings, and the game schedule
        </Typography>

        <Typography variant="h5" gutterBottom component="h2">
          What are the Rules?
        </Typography>
        <Typography component="div">
          Please see the Rules section for the full rules and regulations
        </Typography>
        {/* <br />
        <Typography variant="h5" gutterBottom component="h2">
          The Party
        </Typography>
        <Typography component="div">
          Details to come. We are planning on having the party on New Year’s day
          this year at Cameron’s address at 8513 Riddle place Raleigh 27615.
          Party details pending.
        </Typography> */}
      </div>
    );
  }
}

export default HomePage;
