export const teams: Array<ITeamConfig> = [
  {
    country: 'spain',
    name: 'real-madrid',
    domainRegex: 'realmadrid',
    names: {
      short: 'tvrealmadrid',
      long: 'TV Real Madrid'
    },
    defaultLeague: 'La Liga',
    colors: {
      main: 'royalblue',
      mainDim: 'cornflowerblue',
      selection: 'aquamarine',
      favicon: '#4169e1'
    }
  },
  {
    country: 'england',
    name: 'arsenal',
    domainRegex: 'arsenal',
    names: {
      short: 'tvarsenal',
      long: 'TV Arsenal'
    },
    defaultLeague: 'Premier League',
    colors: {
      main: 'crimson',
      mainDim: 'tomato',
      selection: 'gold',
      favicon: '#cc3314'
    }
  },
  {
    country: 'spain',
    domainRegex: 'cule',
    name: 'barcelona',
    names: {
      short: 'tvcule',
      long: 'TV Barça'
    },
    defaultLeague: 'La Liga',
    colors: {
      main: 'darkblue',
      mainDim: 'darkred',
      selection: 'gold',
      favicon: '#cc3314'
    }
  }
]

export function getByName(teamName: string) {
  return teams.find(t => t.name === teamName)
}

export function resolver(host: string): object {
  for (const team of teams) {
    if (new RegExp(team.domainRegex).test(host)) {
      return team
    }
  }

  // default (for example for localhost)
  return teams[0]
}
