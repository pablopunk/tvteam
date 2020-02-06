import { resolver } from '../lib/teams'
import useSWR from 'swr'
import fetch from 'unfetch'
import Match from '../components/Match'

const fetcher = url => fetch(url).then(r => r.json())

const Index = ({ name, defaultLeague }) => {
  const { data, error } = useSWR(`/api/${name}`, fetcher)

  if (error) {
    return <strong>There was an error fetching data</strong>
  }

  if (!data) {
    return <strong>Loading...</strong>
  }

  return data.map(match => (
    <div key={match.game}>
      <Match match={match} defaultLeague={defaultLeague} />
    </div>
  ))
}

Index.getInitialProps = async function({ req }) {
  if (req) {
    const team = resolver(req.headers.host)

    return { ...team }
  }

  return {}
}

export default Index
