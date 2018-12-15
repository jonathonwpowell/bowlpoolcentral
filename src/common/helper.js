export function parseSheet(sheet) {
  var values = sheet;
  var games = createGamesList(values[0]);
  var winners = createWinnersList(values[2]);
  var players = createPlayerList(values.slice(3), winners.length);

  var bowl = {
    games: games,
    winners: winners,
    players: players
  };

  return bowl;
}

export function parseGamesPage(sheet) {
  var gamesObject = {};
  for (var i = 0; i < sheet.length; i++) {
    var gameObject = {
      name: sheet[i][0],
      time: new Date(sheet[i][1]),
      location: sheet[i][2],
      network: sheet[i][3],
      favorite: sheet[i][4],
      underdog: sheet[i][5],
      spread: sheet[i][6]
    };
    gamesObject[gameObject.name] = gameObject;
  }
  return gamesObject;
}

export function getWinsBarData(bowlPoolData) {
  var winsBarData = [["Wins", "Frequency"]];
  for (var p in bowlPoolData.players) {
    var player = bowlPoolData.players[p];
    winsBarData.push([player.name, parseInt(player.wins)]);
  }
  return winsBarData;
}

export function getMultiPlayerDate(bowlPoolData, players) {}

function createGamesList(games) {
  var gamesArray = [];
  for (var i = 0; i < games.length; i++) {
    if (i < 2) {
      // First Two values aren't games
      continue;
    }
    gamesArray.push(games[i]);
  }
  return gamesArray;
}

function createWinnersList(winners) {
  var winnersArray = [];

  for (var i = 0; i < winners.length; i++) {
    if (i < 2) {
      // First Two values aren't games
      continue;
    }

    winnersArray.push(winners[i]);
  }
  return winnersArray;
}

function createPlayerList(players, gamesPlayed) {
  var playerList = [];
  var playerObject = {};
  for (var playerNum in players) {
    var player = players[playerNum];
    playerObject = { picks: [], wins: 0 };

    for (var i = 0; i < player.length; i++) {
      if (i === 0) {
        playerObject.name = player[0];
      } else if (i === 1) {
        playerObject.wins = player[i];
        playerObject.loses = gamesPlayed - playerObject.wins;
      } else {
        playerObject.picks.push(player[i]);
      }
    }
    playerObject.value = playerNum;
    playerObject.label = playerObject.name;
    playerList.push(playerObject);
  }

  playerList.sort((a, b) => {
    return b.wins - a.wins;
  });
  return playerList;
}
