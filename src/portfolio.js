const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'mkn.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mykhail Stieblov',
  role: 'Web Developer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    telegram: 'https://t.me/miken96',
    github: 'https://github.com/mkn96',
    codecademy: 'https://www.codecademy.com/profiles/miken96',
    email: 'mailto:mikesteblow@gmail.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'React App',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'JavaScript', 'MUI'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Nuxt App',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Nuxt', 'JavaScript', 'Tailwind'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Vue App',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Vue', 'JavaScript', 'Tailwind'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
'OOP',
'JavaScript',
'HTML',
'CSS',
'React',
'Vue',
'Nuxt',
'Tailwind',
'Bootstrap',
'WordPress',
'Git',
'SEO',
'Cypress',
'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mikesteblow@mail.com',
}

export { header, about, projects, skills, contact }
