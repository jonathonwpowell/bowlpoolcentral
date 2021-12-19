import React, { Component } from "react";
import "./App.css";
import config from "./common/api-config";
import Paper from "@material-ui/core/Paper";
import { loadMainSheet, loadGamesSheet } from "./common/spreadsheet";
import Dashboard from "./components/Dashboard";

class App extends Component {
  state = {
    bowlPool: {},
    gameDetails: {},
    searchPlayerList: [],
    error: null,
    page: "Home"
  };

  playerSearch(query) {
    var foundPlayers = this.state.bowlPool.players.filter(p => {
      return p.name.toLowerCase().includes(query.toLowerCase());
    });
    foundPlayers = foundPlayers.splice(0, 10);
    this.setState({ searchPlayerList: foundPlayers });
  }

  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.initClient);
  }

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        loadMainSheet(this.onLoadMainSheet);
        loadGamesSheet(this.onLoadGamesSheet);
      });
  };

  onLoadMainSheet = (data, error) => {
    if (data) {
      const bowlPool = data.bowlPool;
      this.setState({ bowlPool });
      this.setState({ searchPlayerList: bowlPool.players });
      this.playerSearch("");
    } else {
      this.setState({ error });
    }
  };

  onLoadGamesSheet = (data, error) => {
    if (data) {
      const gameDetails = data.gameDetails;
      this.setState({ gameDetails });
    } else {
      this.setState({ error });
    }
  };

  render() {
    return (
      <div className="App">
        <Paper>
          <div>
            <Dashboard
              bowlPool={this.state.bowlPool}
              playerList={this.state.searchPlayerList}
              playerSearch={this.playerSearch.bind(this)}
              gameDetails={this.state.gameDetails}
            />
          </div>
        </Paper>
      </div>
    );
  }
}

export default App;
