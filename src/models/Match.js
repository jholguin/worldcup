import Team from "./Team"
import moment from "moment"

class Match {
    constructor(matchObject) {
        this.match = matchObject
    }

    get date() {
        return moment(this.match.Date).format("MM-DD-YYYY")
    }

    get startTime() {
        return moment(this.match.Date).format("hh:mm A")
    }

    get matchId() {
        return this.match.IdMatch
    }

    getHomeTeam() {
        return this.match.Home && new Team(this.match.Home)
    }

    getAwayTeam() {
        return this.match.Away && new Team(this.match.Away)
    }

    get matchTime() {
        return this.match.MatchTime
    }
}

export default Match
