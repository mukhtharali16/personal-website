export type Film = {
  title: string;
  year: number;
  poster: string;
  description: string;
};

export const films: Film[] = [
  {
    title: "Top Gun",
    year: 1986,
    poster: "/movies/top-gun.jpg",
    description:
      "Maverick, jets, and the loudest soundtrack of the '80s. Pure cinematic adrenaline.",
  },
  {
    title: "Seven Samurai",
    year: 1954,
    poster: "/movies/seven-samurai.jpg",
    description:
      "Kurosawa's blueprint for every team-assembles-to-defend-the-village story since. Three-plus hours that feel like ninety minutes.",
  },
  {
    title: "Citizen Kane",
    year: 1941,
    poster: "/movies/citizen-kane.jpg",
    description:
      "Orson Welles at 25, reinventing what a movie could do with a camera. Rosebud still hits.",
  },
  {
    title: "Oru Vadakkan Veeragatha",
    year: 1989,
    poster: "/movies/oru-vadakkan-veeragatha.jpg",
    description:
      "Malayalam cinema at its most literary — MT's retelling of the Chandu legend, with Mammootty giving the performance of a career.",
  },
  {
    title: "Dasharatham",
    year: 1989,
    poster: "/movies/dasharatham.jpg",
    description:
      "A quiet, grown-up film about a single man who wants to be a father. Mohanlal in one of his warmest roles.",
  },
  {
    title: "Project Hail Mary",
    year: 2026,
    poster: "/movies/project-hail-mary.jpg",
    description:
      "Andy Weir's problem-solving-in-space novel on the big screen — engineering as heroism, with an alien best friend.",
  },
  {
    title: "Seven Psychopaths",
    year: 2012,
    poster: "/movies/seven-psychopaths.jpg",
    description:
      "Martin McDonagh writing a movie about writing a movie, with a stolen Shih Tzu and a lot of blood.",
  },
  {
    title: "Midsommar",
    year: 2019,
    poster: "/movies/midsommar.jpg",
    description:
      "A horror film set entirely in daylight. Ari Aster turning a breakup into folk-ritual catharsis.",
  },
  {
    title: "Oppenheimer",
    year: 2023,
    poster: "/movies/oppenheimer.jpg",
    description:
      "Three hours of physics, politics, and guilt — Nolan at his most restrained, Cillian Murphy at his most haunted.",
  },
  {
    title: "Fight Club",
    year: 1999,
    poster: "/movies/fight-club.jpg",
    description:
      "We don't talk about it. But the editing, the score, and the third-act reveal still set the bar.",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    poster: "/movies/the-dark-knight.jpg",
    description:
      "Heath Ledger's Joker turned a superhero movie into a crime epic. Still the benchmark.",
  },
];
