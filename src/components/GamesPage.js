import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

class GamesPage extends React.Component {
  gameDisplay = game => {
    return (
      <TableRow key={game.name}>
        <TableCell key={game.name + "_name"}>{game.name}</TableCell>
        <TableCell key={game.name + "_date"}>
          {game.time.toLocaleDateString()}
        </TableCell>
        <TableCell key={game.name + "_time"}>
          {game.time.toLocaleTimeString()}
        </TableCell>
        <TableCell key={game.name + "_fav"}>{game.favorite}</TableCell>
        <TableCell key={game.name + "_under"}>{game.underdog}</TableCell>
        <TableCell key={game.name + "_spread"}>{game.spread}</TableCell>
        <TableCell key={game.name + "_net"}>{game.network}</TableCell>
      </TableRow>
    );
  };

  getHeaderRow = () => {
    return (
      <TableRow>
        <TableCell>Game</TableCell>
        <TableCell>Date</TableCell>
        <TableCell>Time</TableCell>
        <TableCell>Favorite</TableCell>
        <TableCell>Underdog</TableCell>
        <TableCell>Spread</TableCell>
        <TableCell>Network</TableCell>
      </TableRow>
    );
  };

  getTodaysGames = gameDetails => {
    var games = [];
    for (var key in gameDetails) {
      if (gameDetails[key].time.getDate() === new Date().getDate()) {
        games.push(this.gameDisplay(gameDetails[key]));
      }
    }
    return games;
  };

  getAllGames = gameDetails => {
    var games = [];
    for (var key in gameDetails) {
      games.push(this.gameDisplay(gameDetails[key]));
    }
    return games;
  };

  render() {
    var gameDetails = this.props.gameDetails;
    var todaysGames = this.getTodaysGames(gameDetails);

    return (
      <div>
        <div>
          <Typography variant="h5" gutterBottom component="h2">
            Today's Games
          </Typography>
          {todaysGames.length !== 0 ? (
            <Table>
              <TableHead>{this.getHeaderRow()}</TableHead>
              <TableBody>{todaysGames}</TableBody>
            </Table>
          ) : (
            <div> No Games Today :(</div>
          )}
        </div>
        <div style={{ marginTop: "30px" }}>
          <Typography variant="h5" gutterBottom component="h2">
            All Games (2019-2020, come back later for the current year's games)
          </Typography>
          <Table padding={"dense"}>
            <TableHead>{this.getHeaderRow()}</TableHead>
            <TableBody>{this.getAllGames(gameDetails)}</TableBody>
          </Table>
        </div>
      </div>
    );
  }
}

export default GamesPage;
