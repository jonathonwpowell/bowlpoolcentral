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
          the director has a hard time covering payment for everyone. Entries
          must be received by the first game Dec. 16th at 12:00 PM
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom component="h2">
          Details
        </Typography>
        <Typography component="div">
          All bowl games except the semifinals and finals are worth one point
          for a total of 38 points.
          <br />
          The semifinals games (2) are worth 2 points for a total of 4 points.
          <br />
          The finals game (1) is worth 4 points.
          <br />
          Correctly pick both teams in the finals you receive 1 bonus point.
          <br />
          Add it all up for a total of 47 Points
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom component="h2">
          Tiebreaker
        </Typography>
        <Typography component="div">TBD</Typography>
        <br />
        <Typography variant="h5" gutterBottom component="h2">
          The Spread
        </Typography>
        <Typography component="div">
          Each game includes a spread, this is how much the favorite must beat
          the underdog in order to win. Example: If NCSU is favored by 3.5
          points they must beat their opponent by at least 4 points to cover the
          SPREAD and win the point for the game.
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom component="h2">
          Picking the Final Team
        </Typography>
        <Typography component="div">
          Since teams will have to win their semifinals game to reach the finals
          it will be more difficult to pick the 2 teams playing in this game and
          therefore the winner. That is why we are awarding an extra bonus point
          for getting both finals teams correct. And a whopping 4 points for
          picking the winner.
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom component="h2">
          Please Note
        </Typography>
        <Typography component="div">
          You can choose a team to win it’s semi-final game with the spread, and
          choose the other team to be in the finals. For example if TCU and Navy
          were playing in the semifinals and Navy is a 10 point underdog, but
          TCU wins by 7 points. You could choose Navy to win this game with the
          spread win (2 points) and also pick TCU to move on to the finals,
          which if you choose both finalists correctly would get you an extra 1
          point.
        </Typography>
        <br />
        <Typography variant="h5" gutterBottom component="h2">
          Payout
        </Typography>
        <Typography component="div">
          Last place gets you your $5.00 back
          <br />
          1st place = 50% payout
          <br />
          2nd place = 25% payout
          <br />
          3rd place = 15% payout
          <br />
          4th place = 10% payout
        </Typography>
        <br />
        <Typography variant="h4" gutterBottom component="h2">
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
