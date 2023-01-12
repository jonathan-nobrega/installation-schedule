const planningDates = require('./data/planningDates');
const buildings = require('./data/buildingsList');
const employees = require('./data/employeesList');

class InstallationPlan {
  constructor(dates = planningDates) {
    this.dates = dates;
  }

  /**
   * Creates an array with execution information for each installation
   * @param {array} buildings 
   * @param {array} employees 
   */
  schedule(buildings, employees) {
    // goal => O (n log n)
    const dailyPlans = [];

    // First we loop throught each one of the dates - O(n)
    for (let i = 0; i < this.dates.length; i++) {
      // For every date we will get a smaller list of pending buildings
      const pendingBuildings = buildings.filter(build => build.scheduleDate == null);
      
      let assignedEmployees = [];
      let buildingsPlannings = [];

      // Loop only throught the pending buildings
      for (let j = 0; j < pendingBuildings.length; j++) {
        let requiredEmployees;
        let buildingEmployees = [];

        if (pendingBuildings[j].type == 1) requiredEmployees = ['cert'];
        if (pendingBuildings[j].type == 2) requiredEmployees = ['cert', 'notCert'];
        if (pendingBuildings[j].type == 3) requiredEmployees = ['cert', 'cert', 'pending', 'pending', 'any', 'any', 'any', 'any'];

        // The required employees list is static so it won't increase with n - O(1)
        for (let k = 0; k < requiredEmployees.length; k++) {
          const employee = employees.find(emp =>
            emp.type.includes(requiredEmployees[k]) &&
            emp.timeOff !== this.dates[i] &&
            !assignedEmployees.includes(emp)
          );

          // If there is an employee with type and isn't at time off
          if (employee) {
            assignedEmployees.push(employee);
            buildingEmployees.push(`${employee.name} (${employee.title})`);
          }
        }

        // If there are enought people working, incorporate to plannings
        if (buildingEmployees.length == requiredEmployees.length) {
          pendingBuildings[j].scheduleDate = this.dates[i];
          buildingsPlannings.push({
            ...pendingBuildings[j],
            employees: buildingEmployees
          });
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

// Big O( n2 )
const installation = new InstallationPlan();
const result = installation.schedule(buildings, employees);
console.log(JSON.stringify(result, null, 2));
// console.log(buildings)

module.exports = result;