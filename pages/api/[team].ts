import { getByName } from '../../lib/teams'
import getMatches from 'livesoccertv-parser'

export default async (req, res) => {
  const {
    query: { team }
  } = req

  const teamObject = getByName(team)

  if (teamObject == null) {
    res.statusCode = 404
    return res.end()
  }

  const games = await getMatches(teamObject.country, teamObject.name)

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(games))
}
