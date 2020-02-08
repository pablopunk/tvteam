import { getByName } from '../../lib/teams'
import getMatches from 'livesoccertv-parser'

export default async (req, res) => {
  const {
    query: { team, timezone }
  } = req

  let country, teamName

  if (team.includes(':')) {
    // format 'country:team'
    ;[country, teamName] = team.split(':')
  } else {
    // format 'team'
    const teamObject = getByName(team)

    if (teamObject == null) {
      res.statusCode = 404
      return res.end()
    }

    country = teamObject.country
    teamName = teamObject.name
  }

  const games: Array<IMatch> = await getMatches(country, teamName, { timezone })

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(games))
}
