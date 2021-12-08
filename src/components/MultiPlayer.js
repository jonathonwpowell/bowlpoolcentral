import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Select from "react-select";
import makeAnimated from "react-select/lib/animated";
import Typography from "@material-ui/core/Typography";

class MultiPlayer extends Component {
  state = {
    selectedPlayers: []
  };

  handleChange = value => {
    this.setState({
      selectedPlayers: value
    });
  };

  render() {
    const { bowlPool } = this.props;

    const getHeadRow = () => {
      var cells = [];
      cells.push(<TableCell key={"Name"}>Name</TableCell>);
      for (var key in this.state.selectedPlayers) {
        var playerName = this.state.selectedPlayers[key].name;
        var playerWins = this.state.selectedPlayers[key].wins;
        cells.push(
          <TableCell key={playerName + "-Name"}>
            {playerName + " (" + playerWins + " Wins)"}
          </TableCell>
        );
      }

      return cells;
    };

    const getResult = (bowlPool, pick, gameKey) => {
      if (
        bowlPool.winners.length <= parseInt(gameKey) ||
        bowlPool.winners[gameKey] === ""
      ) {
        return null;
      } else if (pick === bowlPool.winners[gameKey]) {
        return {
          backgroundColor: "#66BB6A",
          borderRight: "1px solid white",
          paddingLeft: "10px",
          paddingRight: "1px"
        };
      } else {
        return {
          backgroundColor: "#EF5350",
          borderRight: "1px solid white",
          paddingLeft: "10px",
          paddingRight: "1px"
        };
      }
    };

    const getGameRows = () => {
      var rows = [];
      for (var i in bowlPool.games) {
        var cells = [];
        var gameName = bowlPool.games[i];
        cells.push(<TableCell key={gameName}>{gameName}</TableCell>);
        for (var j in this.state.selectedPlayers) {
          var playerName = this.state.selectedPlayers[j].name;
          var selection = this.state.selectedPlayers[j].picks[i];
          var result = getResult(bowlPool, selection, i);
          cells.push(
            <TableCell style={result} key={playerName + selection}>
              {selection}
            </TableCell>
          );
        }
        rows.push(<TableRow key={gameName + i}>{cells}</TableRow>);
      }
      return rows;
    };

    if (bowlPool && bowlPool.players) {
      return (
        <div>
          <Typography variant="h5" gutterBottom component="h2">
            Pick Comparer (2019-2020, come back after games start for the current results)
          </Typography>
          <Select
            closeMenuOnSelect={false}
            components={makeAnimated()}
            isMulti
            options={bowlPool.players}
            onChange={this.handleChange}
          />
          <Table padding={"none"}>
            <TableHead>
              <TableRow>{getHeadRow()}</TableRow>
            </TableHead>
            <TableBody>{getGameRows()}</TableBody>
          </Table>
        </div>
      );
    }
    return <div />;
  }
}

export default MultiPlayer;
