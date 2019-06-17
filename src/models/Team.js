class Team {
    constructor(teamObject) {
        this.team = teamObject
    }

    getID() {
        return this.team.IdTeam
    }

    getName() {
        return this.team.TeamName[0].Description
    }

    getShortName() {
        return this.team.Abbreviation
    }

    getScore() {
        return this.team && this.team.Score
    }

    getFlag() {
        return this.team.PictureUrl
    }
}

export default Team
