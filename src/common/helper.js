import config from "./api-config";


export function parseSheet(sheet) {
    var values = sheet;
    var games = createGamesObject(values[0]);
    var winners = createWinnersObject(values[3]);
    var players = createPlayerObjects(values.slice(3));

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

function createGamesObject(games) {
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

function createWinnersObject(winners) {
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

function createPlayerObjects(players) {
    var playersObject = {};
    for (var playerNum in players) {
        var player = players[playerNum];
        var playerName = player[0];
        playersObject[playerName] = { picks: [], wins : 0};
        for(var i = 0; i < player.length; i++) {
            if (i === 0 ) {
                playersObject[playerName].name = player[0];
            } else if (i === 1) {
                playersObject[playerName].wins = player[i];
            } else {
                playersObject[playerName].picks.push(player[i]);
            }
        }
    }

    return playersObject;
}

