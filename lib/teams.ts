export const teams: Array<ITeamConfig> = [
  {
    country: 'spain',
    name: 'real-madrid',
    domainRegex: 'madrid',
    names: {
      short: 'tvrealmadrid',
      long: 'TV Real Madrid',
    },
    defaultLeague: 'La Liga',
    colors: {
      main: 'blueviolet',
      mainDim: 'cornflowerblue',
      selection: 'aquamarine',
      favicon: '#4169e1',
    },
  },
  {
    country: 'england',
    name: 'arsenal',
    domainRegex: 'arsenal',
    names: {
      short: 'tvarsenal',
      long: 'TV Arsenal',
    },
    defaultLeague: 'Premier League',
    colors: {
      main: 'crimson',
      mainDim: 'tomato',
      selection: 'gold',
      favicon: '#cc3314',
    },
  },
  {
    country: 'spain',
    domainRegex: 'barcelona',
    name: 'barcelona',
    names: {
      short: 'tvcule',
      long: 'TV Barça',
    },
    defaultLeague: 'La Liga',
    colors: {
      main: 'darkblue',
      mainDim: 'darkred',
      selection: 'gold',
      favicon: '#cc3314',
    },
  },
]

export function resolver(host: string): object {
  for (const team of teams) {
    if (new RegExp(team.domainRegex).test(host)) {
      return team
    }
  }

  // default (for example for localhost)
  return teams[0]
}
