import axios from "axios"
import Match from "./models/Match"
import fireDB from "./firebase"

const COMPETITION_ID = 103
const SEASON_ID = 278513
const STAGE_ID = 278527

const currentGames = async () => {
    const database = fireDB.ref("/matches")
    const gamesResults = await axios.get(
        `https://api.fifa.com/api/v1/calendar/matches?idseason=${SEASON_ID}&idcompetition=${COMPETITION_ID}`
    )

    const matches = gamesResults.data.Results.map(match => {
        return new Match(match)
    })

    matches.forEach(item => {
        const test = database.child(item.getDate())
        test.push({
            id: item.getMatchId(),
            time: item.getMatchTime(),
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
        })
    })
}

currentGames()
