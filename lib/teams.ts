export const teams: { [name: string]: ITeamConfig } = {
  realmadrid: {
    country: 'spain',
    name: 'real-madrid',
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
  arsenal: {
    country: 'england',
    name: 'arsenal',
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
  barça: {
    country: 'spain',
    name: 'barcelona',
    names: {
      short: 'tvbarça',
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
}

export function getByName(teamName: string) {
  for (const team in teams) {
    if (teams[team].name === teamName) {
      return teams[team]
    }
  }

  return null
}

export function resolver(host: string): object {
  for (const team in teams) {
    if (new RegExp(team).test(host)) {
      return teams[team]
    }
  }

  // default (for example for localhost)
  return teams.realmadrid
}
