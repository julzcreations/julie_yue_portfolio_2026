export type EarlierProject = {
  name: string
  blurb: string
  technologies: string[]
  github?: string
  liveSite?: string
  image: string
}

/**
 * Toy projects from 2021–2023 — student / early-career era.
 * Kept here as a path-of-progression signal. Frame this section as
 * archived, not headline.
 */
export const earlierProjects: EarlierProject[] = [
  {
    name: 'BlackJack',
    blurb: 'Local-multiplayer blackjack for in-person play. Up to 7 players.',
    technologies: ['React', 'TypeScript', 'Bootstrap'],
    github: 'https://github.com/julzcreations/blackjack',
    liveSite: 'https://blackjack.julzcreations.com/',
    image: '/work/legacy/blackjack.png',
  },
  {
    name: 'Image Uploader',
    blurb: 'Upload, preview, and download images. Frontend demo — backend archived.',
    technologies: ['React', 'TypeScript', 'Express', 'Node'],
    github: 'https://github.com/julzcreations/image_uploader',
    liveSite: 'https://image-uploader.julzcreations.com/',
    image: '/work/legacy/image-uploader.png',
  },
  {
    name: 'Color Generator',
    blurb: 'Pick a color, get a spectrum derived from it.',
    technologies: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/julzcreations/color-generator',
    liveSite: 'https://julzcreations.github.io/color-generator/',
    image: '/work/legacy/color-generator.png',
  },
  {
    name: 'Weather App',
    blurb: 'City-based weather lookup. Cute, simple, my first API project.',
    technologies: ['React', 'JavaScript', 'REST APIs'],
    github: 'https://github.com/julzcreations/weather-app',
    liveSite: 'https://julzcreations.github.io/weather-app/',
    image: '/work/legacy/weather-app.png',
  },
  {
    name: 'Personal Portfolio v1',
    blurb: 'My first portfolio site. Where this one started.',
    technologies: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/julzcreations/julie-yue-portfolio-v1',
    liveSite: 'https://julzcreations.github.io/julie-yue-portfolio-v1/',
    image: '/work/legacy/personal-portfolio-v1.png',
  },
  {
    name: 'Dog App',
    blurb: 'CRUD over a dog database. Search, add, edit, delete records.',
    technologies: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/julzcreations/dog-app',
    liveSite: 'https://julzcreations.github.io/dog-app/',
    image: '/work/legacy/dog-app.png',
  },
]
