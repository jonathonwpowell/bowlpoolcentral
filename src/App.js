import React, { Component } from "react";
import "./App.css";
import WinsBar from "./components/WinsBar";
import config from "./common/api-config";
import PlayerList from "./components/PlayerList";
import MultiPlayer from "./components/MultiPlayer";
import Paper from "@material-ui/core/Paper";
import { load } from "./common/spreadsheet";
import Dashboard from "./components/Dashboard";

class App extends Component {
  state = {
    bowlPool: {},
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
        load(this.onLoad);
      });
  };

  onLoad = (data, error) => {
    if (data) {
      const bowlPool = data.bowlPool;
      this.setState({ bowlPool });
      this.setState({ searchPlayerList: bowlPool.players });
      this.playerSearch("");
    } else {
      this.setState({ error });
    }
  };

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
            <Menu setPage={this.setPage} />
            <div className={"site-name"}>Bowl Pool Central</div>
          </header> */}
        {this.state.page === "Home" ? (
          <Paper>
            <div>
              <Dashboard
                bowlPool={this.state.bowlPool}
                playerList={this.state.searchPlayerList}
                playerSearch={this.playerSearch.bind(this)}
              />
            </div>
          </Paper>
        ) : null}
        {this.state.page === "PlayerList" ? (
          <Paper>
            <PlayerList
              playerList={this.state.searchPlayerList}
              playerSearch={this.playerSearch.bind(this)}
            />
          </Paper>
        ) : null}
        {this.state.page === "Wins" ? (
          <Paper>
            <WinsBar bowlPool={this.state.bowlPool} />
          </Paper>
        ) : null}
        {this.state.page === "MultiPlayer" ? (
          <Paper>
            <MultiPlayer bowlPool={this.state.bowlPool} />
          </Paper>
        ) : null}
      </div>
    );
  }
}

export default App;
