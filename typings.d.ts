interface ITeamConfig {
  country: string
  name: string
  domainRegex: string
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