/**
 * List of buildings to schedule solar installation.
 * Installation execution will be prioritized by request date.
 * Date format: dd-mm-yyyy
 */
const buildingsList = [
    {
        type: 1,
        description: "Flinstones Home",
        requestDate: "13-11-2022"
    },
    {
        type: 2,
        description: "Jetsons Home",
        requestDate: "19-11-2022"
    },
    {
        type: 3,
        description: "Hogwarts School",
        requestDate: "22-11-2022"
    },
    {
        type: 1,
        description: "Simpsons Home",
        requestDate: "05-12-2022"
    },
    {
        type: 2,
        description: "Adams Home",
        requestDate: "09-12-2022"
    },
    {
        type: 3,
        description: "Stark Industries",
        requestDate: "10-12-2022"
    },
    {
        type: 2,
        description: "Griffin Home",
        requestDate: "19-12-2022"
    },
    {
        type: 3,
        description: "Shopping Mall",
        requestDate: "22-12-2022"
    },
    {
        type: 3,
        description: "Raleigh Museum",
        requestDate: "05-01-2023"
    }
]

module.exports = buildingsList