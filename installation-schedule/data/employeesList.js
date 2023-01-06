/**
 * List of active employees
 * Employees types correspond to the followinf rules:
 *      cert: Certified installers
 *      pending: Installers pending certification
 *      notCert: Installers pending certification OR a laborer
 *      laborer: Laborers
 *      any: Workers of any type (cert, pending or laborer) 
 */
const employeesList = [
    {
        "name": "Parker Terbruggen",
        "type": "cert",
        "timeOff": "13-10-2022"
    }, {
        "name": "Oliver Leffek",
        "type": "cert",
        "timeOff": "13-12-2021"
    }, {
        "name": "Kaila Ghost",
        "type": "cert",
        "timeOff": "15-02-2022"
    }, {
        "name": "Ronald Lavington",
        "type": "cert",
        "timeOff": "01-12-2021"
    }, {
        "name": "Tania Crossfeld",
        "type": "laborer",
        "timeOff": "08-02-2022"
    }, {
        "name": "Jay Hulcoop",
        "type": "pending",
        "timeOff": "30-08-2022"
    }, {
        "name": "Corrine Hearns",
        "type": "pending",
        "timeOff": "17-05-2022"
    }, {
        "name": "Nickolas Cumming",
        "type": "pending",
        "timeOff": "28-11-2022"
    }, {
        "name": "Luce Thompsett",
        "type": "cert",
        "timeOff": "07-06-2022"
    }, {
        "name": "Florina Cavey",
        "type": "pending",
        "timeOff": "29-04-2022"
    }, {
        "name": "Tadeas Hammerstone",
        "type": "pending",
        "timeOff": "28-03-2022"
    }, {
        "name": "Allistir Birkett",
        "type": "pending",
        "timeOff": "10-02-2022"
    }, {
        "name": "Tyne Longworth",
        "type": "laborer",
        "timeOff": "04-07-2022"
    }, {
        "name": "Taite De Cleyne",
        "type": "cert",
        "timeOff": "07-05-2022"
    }, {
        "name": "Aloysius Inglese",
        "type": "laborer",
        "timeOff": "14-08-2022"
    }
];

module.exports = employeesList;