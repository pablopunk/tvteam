import Head from 'next/head'
import TopBar from './TopBar'
import { teams } from '../lib/teams'

interface IProps {
  team: ITeamConfig
  children: any
}

const Layout = (props: IProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/favicon/${props.team.name}/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicon/${props.team.name}/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicon/${props.team.name}/favicon-16x16.png`}
      />
      <link
        rel="mask-icon"
        href={`/favicon/${props.team.name}/safari-pinned-tab.svg`}
        color={props.team.colors.favicon}
      />
      <link
        rel="shortcut icon"
        href={`/favicon/${props.team.name}/favicon.ico`}
      />
      <meta
        name="apple-mobile-web-app-title"
        content={props.team.names.short}
      />
      <meta name="application-name" content={props.team.names.short} />
      <meta name="theme-color" content="#ffffff" />
      <title>{props.team.names.long}</title>
    </Head>
    <TopBar team={props.team} />
    <main>
      {props.children}
      <nav>
        <h3>Other teams</h3>
        {teams
          .filter(t => t.name !== props.team.name)
          .map(otherTeam => (
            <a
              key={otherTeam.name}
              href={`https://${otherTeam.domainRegex}.com`}
              style={{
                backgroundColor: otherTeam.colors.main
              }}
            >
              {otherTeam.names.long}
            </a>
          ))}
      </nav>
    </main>
    <footer>
      <a href="https://pablo.pink">© Pablo Varela {new Date().getFullYear()}</a>
    </footer>
    <style global jsx>{`
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        padding: 0;
        color: ${props.team.colors.main};
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      }
      *::selection {
        background-color: ${props.team.colors.selection};
      }
      ul {
        padding: 0;
      }
      main {
        z-index: 2;
        position: relative;
        background-color: white;
        margin-top: 80px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      nav {
        border-top: 1px solid ${props.team.colors.main};
        margin-top: 2rem;
        width: 200px;
        position: relative;
        display: flex;
        flex-direction: column;
      }
      nav a {
        text-decoration: none;
        color: white;
        padding: 0.4rem 1rem;
        border-radius: 5px;
        width: 100%;
        margin: 0.2rem 0;
      }
      nav a:hover {
        opacity: 0.8;
      }
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;
      }
      footer a {
        color: ${props.team.colors.mainDim};
        font-size: 0.7em;
      }
      footer a:hover {
        text-decoration: underline;
        color: ${props.team.colors.selection};
      }
    `}</style>
  </>
)

export default Layout
