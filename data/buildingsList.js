/**
 * List of buildings to schedule solar installation.
 * Installation execution will be prioritized by request date.
 * Date format: dd-mm-yyyy
 */
const buildingsList = [
    {
        type: 1,
        description: 'Flinstones Home',
        requestDate: '13-11-2022'
    },
    {
        type: 2,
        description: 'Jetsons Home',
        requestDate: '26-11-2022'
    },
    {
        type: 3,
        description: 'Hogwarts School',
        requestDate: '02-12-2022'
    },
    {
        type: 1,
        description: 'Simpsons Home',
        requestDate: '09-12-2022'
    },
    {
        type: 2,
        description: 'Adams Home',
        requestDate: '15-12-2022'
    },
    {
        type: 3,
        description: 'Stark Industries',
        requestDate: '02-01-2023'
    },
    {
        type: 2,
        description: 'Griffin Home',
        requestDate: '04-01-2023'
    },
    {
        type: 3,
        description: 'Shopping Mall',
        requestDate: '14-01-2023'
    },
    {
        type: 3,
        description: 'Some important commercial building',
        requestDate: '14-01-2023'
    }
]

module.exports = buildingsList