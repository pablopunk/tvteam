import getMatches from 'livesoccertv-parser'

export default async (req, res) => {
  const {
    query: { country, team, timezone }
  } = req

  const games = await getMatches(country, team, { timezone })

  if (games.length === 0) {
    res.statusCode = 404
    return res.end('404')
  }

  res.statusCode = 200
  return res.json(games)
}
