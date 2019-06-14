import Team from './Team'

class Match {
    constructor(matchObject) {
        this.match = matchObject
    }

    getMatchId () {
        return this.match.IdMatch
    }

    getHomeTeam () {
        return new Team(this.match.HomeTeam)
    }

    getAwayTeam () {
        return new Team(this.match.AwayTeam)
    }

    getMatchTime () {
        return this.match.MatchTime
    }
}

export default Match