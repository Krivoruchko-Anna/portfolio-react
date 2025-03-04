export interface ExperienceItemType {
    date: string
    title: string
    description: string
    stack: string[]
    link?: string
}

export const experienceData: ExperienceItemType[] = [
    {
        date: 'Sep 2023 - Nov 2024',
        title: 'Frontend Developer (Vue.js) at Centiment',
        description:
            'My primary responsibility was rewriting the existing monolithic application into a modern architecture using Vue.js 3 with a separate frontend. I developed new components and pages aligned with the updated design, ensuring a seamless user experience. Additionally, I participated in design discussions, collaborated with team members to refine the UI, conducted code reviews to maintain high-quality standards, and supported the migration to a scalable and efficient platform architecture.',
        stack: ['Vue.js 2', 'Vue.js 3', 'TS', 'Storybook', 'UnoCss', 'Pinia', 'Axios'],
        link: 'https://www.centiment.co/',
    },
    {
        date: 'Jan 2022 - Jul 2023',
        title: 'Frontend Developer (Vue.js) at Godel Technologies',
        description:
            'I worked on a web application for monitoring communication data, consolidating sources like phone calls, emails, and WhatsApp into a unified platform. My role included creating web components with LitElement, developing features with Vue.js 3, writing tests, documenting technical details, performing code reviews, and participating in Agile ceremonies and planning meetings.',
        stack: [
            'Vue.js 3',
            'TS',
            'Lit',
            'Storybook',
            'Vitest',
            'Vue Test Utils',
            'Jest',
            'Pinia',
            'Axios',
        ],
        link: 'https://www.godeltech.com/',
    },
    {
        date: 'Jun 2021 - Dec 2021',
        title: 'Frontend Developer (Vue.js) at Brymonsoft',
        description:
            'I worked on two startup projects: a platform for online music classes and a web constructor for fast website creation. My responsibilities included developing and upgrading features and widgets with Vue.js 2 and 3, troubleshooting and maintaining the code, optimizing user experience, creating technical documentation, performing code reviews, and contributing to project planning and estimation.',
        stack: ['Vue.js 2', 'Vue.js 3', 'HTML', 'JS', 'SCSS', 'Axios', 'Vuex', 'Vue Router', 'Docker'],
        link: 'https://brymonsoft.com/',
    },
    {
        date: 'Mar 2021 - June 2021',
        title: 'Frontend Developer (Vue.js) at Antalogic',
        description:
            'I worked on two projects: an international platform for trading commercial vehicles and a charity platform designed to motivate people to support one another. My role included developing features and components using Vue.js 2 and 3, refactoring code for quality, optimizing user experience, researching best practices and estimation and planning for efficient development.',
        stack: ['Vue.js 2', 'Vue.js 3', 'Axios', 'Nuxt', 'SCSS', 'Bootstrap', 'Vuex'],
    },
    {
        date: 'Jun 2020 - Mar 2021',
        title: 'Frontend Developer (Freelance)',
        description: 'Working on several websites and landing pages, some web design works.',
        stack: ['JS', 'HTML', 'CSS', 'JQuery', 'AJAX'],
    },
]
