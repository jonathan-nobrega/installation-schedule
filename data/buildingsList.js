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
        description: 'Hogwarts',
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
        requestDate: '03-01-2023'
    },
]

module.exports = planningDates