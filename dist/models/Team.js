"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Team {
  constructor(teamObject) {
    this.team = teamObject;
  }

  getID() {
    return this.team.IdTeam;
  }

  getName() {
    return this.team.TeamName[0].Description;
  }

  getShortName() {
    return this.team.Abbreviation;
  }

  getScore() {
    return this.team.Score;
  }

  getFlag() {
    return this.team.PictureUrl;
  }

}

var _default = Team;
exports.default = _default;