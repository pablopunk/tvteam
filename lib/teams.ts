export const teams = {
  realmadrid: {
    country: "spain",
    name: "real-madrid",
    defaultLeague: "La Liga"
  },
  arsenal: {
    country: "england",
    name: "arsenal",
    defaultLeague: "Premier League"
  },
  barça: {
    country: "spain",
    name: "barcelona",
    defaultLeague: "La Liga"
  }
};

export function getByName(teamName: string) {
  for (const team in teams) {
    if (teams[team].name === teamName) {
      return teams[team];
    }
  }

  return null;
}

export function resolver(host: string): object {
  for (const team in teams) {
    if (new RegExp(team).test(host)) {
      return teams[team];
    }
  }

  // default (for example for localhost)
  return teams.realmadrid;
}
