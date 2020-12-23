export const task_dummy = {
    project_id: '1',
    current_week: 2,
    start: '',
    task: [
        {
            name: 'Planning',
            week_start: 1,
            week_end: 1,
            completed: true //Mapping on backend
        },
        {
            name: 'Design',
            week_start: 2,
            week_end: 3,
            completed: true
        },
        {
            name: 'Coding',
            week_start: 3,
            week_end: 12,
            completed: true
        },
        {
            name: 'Testing',
            week_start: 12,
            week_end: 13,
            completed: true
        },
        {
            name: 'Deploy',
            week_start: 14,
            week_end: 14,
            completed: true
        },
    ],
    sub_tasks: [
        [
            {
                name: 'Planning',
                description: 'plan the project, define a feature and timeline of project development',
                create_by: 'Pongsakorn',
                completed: true,

            },
            {
                name: 'Choosing tools',
                description: 'Choose a tools for development',
                create_by: 'Pongsakorn',
                completed: true,

            },

        ],
        [
            {
                name: 'UI Design ',
                description: 'Design a user interface with Figma',
                create_by: 'Pongsakorn',
                completed: false,

            },
            {
                name: 'Database Design ',
                description: 'Design a database on Draw.io',
                create_by: 'Pongsakorn',
                completed: true,

            },

        ],
        [
            {
                name: 'Coding [ Auth Service ]',
                description: 'Coding a Auth Service',
                create_by: 'Pongsakorn',
                completed: false,

            },
            {
                name: 'Coding [ Create Database ]',
                description: 'Create a database',
                create_by: 'Pongsakorn',
                completed: false,

            },

        ],
        [
            {
                name: 'Testing [ Auth Service ]',
                description: 'Testing a Auth Service',
                create_by: 'Pongsakorn',
                completed: false,

            }

        ],
        [
            {
                name: 'Deploy Backend',
                description: 'Deploy the Backend to Server',
                create_by: 'Pongsakorn',
                completed: false,

            },
            {
                name: 'Deploy Frontend',
                description: 'Deploy the Frontend to Server',
                create_by: 'Pongsakorn',
                completed: false,

            },
            {
                name: 'Deploy Mobile',
                description: 'Deploy the Mobile to Play store',
                create_by: 'Pongsakorn',
                completed: false,

            }

        ],

    ]
}
