"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Team = _interopRequireDefault(require("./Team"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Match {
  constructor(matchObject) {
    this.match = matchObject;
  }

  getMatchId() {
    return this.match.IdMatch;
  }

  getHomeTeam() {
    return new _Team.default(this.match.HomeTeam);
  }

  getAwayTeam() {
    return new _Team.default(this.match.AwayTeam);
  }

  getMatchTime() {
    return this.match.MatchTime;
  }

}

var _default = Match;
exports.default = _default;