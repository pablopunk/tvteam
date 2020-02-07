import { getByName } from '../../lib/teams'
import getMatches from 'livesoccertv-parser'

export default async (req, res) => {
  const {
    query: { team, timezone }
  } = req

  const teamObject = getByName(team)

  if (teamObject == null) {
    res.statusCode = 404
    return res.end()
  }

  const games: Array<IMatch> = await getMatches(
    teamObject.country,
    teamObject.name,
    { timezone }
  )

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(games))
}
