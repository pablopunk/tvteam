import useSWR from "swr"
import fetch from "unfetch"
import moment from "moment-timezone"
import { DoubleBounce } from "better-react-spinkit"
import Match from "../components/Match"
import { resolver } from "../lib/teams"
import Layout from "../components/Layout"
import type matches from "livesoccertv-parser"

type IMatch = Awaited<ReturnType<typeof matches>>[number]

const fetcher = (url) => fetch(url).then((r) => r.json())

interface IProps {
  team: ITeamConfig
}

const Index = (props: IProps) => {
  const timezone = moment.tz.guess()
  const { data, error } = useSWR(
    `/api/${props.team.country}/${props.team.name}/?timezone=${timezone}`,
    fetcher,
  )

  if (error) {
    console.error(error)
  }

  if (error && !data) {
    return <strong>There was an error fetching data</strong>
  }

  let nextOrLive: IMatch | null = null
  let upcoming: Array<IMatch> = []

  if (data) {
    upcoming = (data as Array<IMatch>)
      .filter((match) => match.played === false)
      .filter((match) => match.live === false)

    nextOrLive = data[0]

    for (const match of data) {
      if (match.played || match.live) {
        nextOrLive = match
      }
    }
  }

  return (
    <Layout team={props.team}>
      {data ? (
        <>
          <Match match={nextOrLive} defaultLeague={props.team.defaultLeague} />
          {upcoming.map((match) => (
            <Match
              key={match.game}
              match={match}
              defaultLeague={props.team.defaultLeague}
            />
          ))}
        </>
      ) : (
        <div className="loading">
          <DoubleBounce size={50} color={props.team.colors.main} />
        </div>
      )}
      <style jsx>{`
        .loading {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
      `}</style>
    </Layout>
  )
}

Index.getInitialProps = async ({ req }) => {
  if (req) {
    const team = resolver(req.headers.host)

    return { team }
  }

  return {}
}

export default Index
