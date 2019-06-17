import Team from "./Team"
import moment from "moment"

class Match {
    constructor(matchObject) {
        this.match = matchObject
    }

    getDate() {
        return moment(this.match.Date).format("MM-DD-YYYY")
    }

    getMatchId() {
        return this.match.IdMatch
    }

    getHomeTeam() {
        return this.match.Home && new Team(this.match.Home)
    }

    getAwayTeam() {
        return this.match.Away && new Team(this.match.Away)
    }

    getMatchTime() {
        return this.match.MatchTime
    }
}

export default Match
