export function parseSheet(sheet) {
    var values = sheet;
    var games = createGamesList(values[0]);
    var winners = createWinnersList(values[3]);
    var players = createPlayerList(values.slice(3));

    var bowl = {
        games: games,
        winners: winners,
        players: players
    };

    return bowl;
}
export function getWinsBarData(bowlPoolData) {
    var winsBarData = [["Player","Wins"]];
    for (var p in bowlPoolData.players) {
        var player = bowlPoolData.players[p]
        winsBarData.push([player.name,parseInt(player.wins)]);
    }
    return winsBarData;
}

function createGamesList(games) {
    var gamesArray = [];
    for(var i = 0; i < games.length; i++) {
        if (i < 2) {
            // First Two values aren't games
            continue;
        }
        gamesArray.push(games[i])
        
        
    }
    return gamesArray;
}

function createWinnersList(winners) {
    var winnersArray = [];

    for(var i = 0; i < winners.length; i++) {
        if (i < 2) {
            // First Two values aren't games
            continue;
        }
        
        winnersArray.push(winners[i])
        
    }
    return winnersArray;
}

function createPlayerList(players) {
    var playerList = [];
    var playerObject = {};
    for (var playerNum in players) {
        var player = players[playerNum];
        playerObject = { picks: [], wins : 0};
        playerObject.key = playerNum;
        for(var i = 0; i < player.length; i++) {
            if (i === 0 ) {
                playerObject.name = player[0];
            } else if (i === 1) {
                playerObject.wins = player[i];
            } else {
                playerObject.picks.push(player[i]);
            }
        }
        playerList.push(playerObject);
    }

    playerList.sort((a,b) => {return b.wins - a.wins;})
    return playerList;
}

