const buildingTypes = require('./data/buildingTypes');
const planningDates = require('./data/planningDates');
const buildings = require('./data/buildingsList');
const employees = require('./data/employeesList');

class InstallationPlan {
  constructor(types = buildingTypes, dates = planningDates) {
    this.types = types;
    this.dates = dates;
    // this.buildings = [];
    // this.employees = [];
    this.appointments = [];
  }

  /**
   * Creates an array with execution information for each installation
   * @param {array} buildings 
   * @param {array} employees 
   */
  schedule(buildings, employees) {
    const dailyPlans = [];

    for (let i = 0; i < this.dates.length; i++) {
      let assignedEmployees = [];
      let buildingsPlannings = [];

      for (let j = 0; j < buildings.length; j++) {
        const dailyPlansString = JSON.stringify(dailyPlans)
        if (dailyPlansString.includes(buildings[j].description)) continue;

        let requiredEmployees;
        let buildingEmployees = [];

        switch (buildings[j].type) {
          case 1:
            requiredEmployees = ['cert'];
            break;
          case 2:
            requiredEmployees = ['cert', 'notCert'];
            break;
          case 3:
            requiredEmployees = ['cert', 'cert', 'pending', 'pending', 'any', 'any', 'any', 'any'];
            break;
          default:
            break;
        }

        for (let k = 0; k < requiredEmployees.length; k++) {
          const employee = employees.find(a => a.type.includes(requiredEmployees[k]) && !assignedEmployees.includes(a));

          if (employee && !assignedEmployees.includes(employee) && (employee.timeOff !== this.dates[i])) {
            assignedEmployees.push(employee);
            buildingEmployees.push(`${employee.name} (${employee.title})`);
          } else {
            buildingEmployees = [];
            break;
          }
        }

        if (buildingEmployees.length > 0) {
          buildingsPlannings.push({
            building: buildings[j].description,
            employees: buildingEmployees
          });
          buildings[j].done = true;
        }
      }
      dailyPlans.push({
        date: this.dates[i],
        installations: buildingsPlannings
      });
    }
    return dailyPlans;
  }
}

const installation = new InstallationPlan();
const result = installation.schedule(buildings, employees);

console.log(JSON.stringify(result, null, 2));

module.exports = InstallationPlan;