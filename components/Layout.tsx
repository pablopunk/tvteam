import Head from 'next/head'
import TopBar from './TopBar'

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
      <link rel="manifest" href="/static/manifest.json" />
      <link
        rel="mask-icon"
        href={`/favicon/${props.team.name}/safari-pinned-tab.svg`}
        color={props.team.colors.favicon}
      />
      <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
      <meta
        name="apple-mobile-web-app-title"
        content={props.team.names.short}
      />
      <meta name="application-name" content={props.team.names.short} />
      <meta name="msapplication-config" content="/static/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway"
        rel="stylesheet"
      />
      <title>{props.team.names.long}</title>
    </Head>
    <TopBar team={props.team} />
    <main>{props.children}</main>
    <footer>
      <a href="https://pablo.pink">Pablo Varela ©</a>
      <style global jsx>{`
        body {
          margin: 0;
          padding: 0;
          color: ${props.team.colors.main};
          font-family: Raleway, sanserif;
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
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        footer {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1em;
        }
        footer a {
          color: ${props.team.colors.mainDim};
          text-decoration: none;
          font-size: 0.7em;
        }
        footer a:hover {
          text-decoration: underline;
          color: ${props.team.colors.selection};
        }
      `}</style>
    </footer>
  </>
)

export default Layout
