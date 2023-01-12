/**
 * List of active employees
 * Employees types correspond to the following rules:
 *      cert: Certified installers
 *      pending: Installers pending certification
 *      notCert: Installers pending certification OR a laborer
 *      laborer: Laborers
 *      any: Workers of any type (cert, pending or laborer) 
 */
const employeesList = [
  {
    name: "See Garrioch",
    type: "laborer/notCert/any",
    title: "Laborer",
    timeOff: "24-01-2023"
  },
  {
    name: "Derrek Ogilby",
    type: "pending/notCert/any",
    title: "Installer pending certification",
    timeOff: "13-09-2022"
  },
  {
    name: "Natasha Chessell",
    type: "pending/notCert/any",
    title: "Installer pending certification",
    timeOff: "08-07-2022"
  },
  {
    name: "Doreen Jertz",
    type: "laborer/notCert/any",
    title: "Laborer",
    timeOff: "27-06-2022"
  },
  {
    name: "Renate Geraghty",
    type: "laborer/notCert/any",
    title: "Laborer",
    timeOff: "11-04-2022"
  },
  {
    name: "Eulalie Foxhall",
    type: "pending/notCert/any",
    title: "Installer pending certification",
    timeOff: "05-10-2022"
  },
  {
    name: "Neils Lakeland",
    type: "cert/any",
    title: "Certified installer",
    timeOff: "12-01-2023"
  },
  {
    name: "Letitia Dykas",
    type: "laborer/notCert/any",
    title: "Laborer",
    timeOff: "16-04-2022"
  },
  {
    name: "Umberto Cases",
    type: "laborer/notCert/any",
    title: "Laborer",
    timeOff: "15-02-2022"
  },
  {
    name: "Judas Antonowicz",
    type: "cert/any",
    title: "Certified installer",
    timeOff: "12-01-2023"
  },
  {
    name: "Briny Healings",
    type: "pending/notCert/any",
    title: "Installer pending certification",
    timeOff: "09-12-2022"
  },
  {
    name: "Lilla Tawton",
    type: "cert/any",
    title: "Certified installer",
    timeOff: "12-01-2023"
  },
  {
    name: "Cammi Kingscote",
    type: "pending/notCert/any",
    title: "Installer pending certification",
    timeOff: "13-01-2022"
  },
  {
    name: "Viva Hechlin",
    type: "laborer/notCert/any",
    title: "Laborer",
    timeOff: "30-09-2022"
  },
  {
    name: "Modesty Jossum",
    type: "cert/any",
    title: "Certified installer",
    timeOff: "13-01-2023"
  }
];

module.exports = employeesList;