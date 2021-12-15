import config from "./api-config";
import { parseSheet, parseGamesPage } from "./helper";

export function loadMainSheet(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Full_Data!A1:AZ100"
      })
      .then(
        response => {
          const data = response.result.values;
          const bowlPool = parseSheet(data) || [];
          callback({
            bowlPool
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}

export function loadGamesSheet(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.gameScheduleSheetId,
        range: "Games!A2:AZ100"
      })
      .then(
        response => {
          const data = response.result.values;
          const gameDetails = parseGamesPage(data) || [];
          callback({
            gameDetails
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
