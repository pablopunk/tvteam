interface ITeamConfig {
  country: string
  name: string
  defaultLeague: string
  colors: {
    main: string
    mainDim: string
    selection: string
    favicon: string
  }
  names: {
    short: string
    long: string
  }
}

interface IMatch {
  competition: string
  date: string
  game: string
  live: boolean
  played: boolean
  time: string
  tvs: Array<string>
}
