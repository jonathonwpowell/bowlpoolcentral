import config from "./api-config";
import { parseSheet } from "./helper";

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "A1:AZ100"
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