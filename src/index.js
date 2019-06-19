import axios from "axios"
import Match from "./models/Match"
import fireDB from "./firebase"

const COMPETITION_ID = 103
const SEASON_ID = 278513
const STAGE_ID = 278527

const disconnented = () => {
    console.log('testing')
}

const currentGames = async () => {
    const database = fireDB.ref("/matches")
    database.onDisconnect(disconnented)
    const gamesResults = await axios.get(
        `https://api.fifa.com/api/v1/calendar/matches?idseason=${SEASON_ID}&idcompetition=${COMPETITION_ID}`
    )

    const matches = gamesResults.data.Results.map(match => {
        return new Match(match)
    })

    matches.forEach(item => {
        const test = database.child(`${item.date}/${item.matchId}`)
        test.set({
            id: item.matchId,
            time: item.matchTime,
            homeTeam: item.getHomeTeam() && {
                score: item.getHomeTeam().score,
                name: item.getHomeTeam().shortName,
                flag: item.getHomeTeam().flag
            },
            awayTeam: item.getAwayTeam() && {
                score: item.getAwayTeam().score,
                name: item.getAwayTeam().shortName,
                flag: item.getAwayTeam().flag
            }
        })
    })

    
}

currentGames()
