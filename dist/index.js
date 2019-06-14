"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _Match = _interopRequireDefault(require("./models/Match"));

var _firebase = _interopRequireDefault(require("./firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const COMPETITION_ID = 103;
const SEASON_ID = 278513;
const STAGE_ID = 278527;

const currentGames = async () => {
  const database = _firebase.default.ref("/matches");

  const gamesResults = await _axios.default.get(`https://api.fifa.com/api/v1/live/football/recent/${COMPETITION_ID}/${SEASON_ID}`);
  const matches = gamesResults.data.Results.map(match => {
    return new _Match.default(match);
  });
  matches.forEach(item => {
    const test = database.child(item.getMatchId());
    test.set({
      id: item.getMatchId(),
      homeTeam: {
        score: item.getHomeTeam().getScore(),
        name: item.getHomeTeam().getShortName(),
        flag: item.getHomeTeam().getFlag()
      },
      awayTeam: {
        score: item.getAwayTeam().getScore(),
        name: item.getAwayTeam().getShortName(),
        flag: item.getAwayTeam().getFlag()
      }
    });
  });
};

currentGames();