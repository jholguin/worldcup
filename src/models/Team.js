class Team {
    constructor(teamObject) {
        this.team = teamObject
    }

    get ID() {
        return this.team.IdTeam
    }

    get name() {
        return this.team.TeamName[0].Description
    }

    get shortName() {
        return this.team.IdCountry
    }

    get score() {
        return this.team.Score ? this.team.Score : 0
    }

    get flag() {
        return this.team.PictureUrl
    }
}

export default Team
