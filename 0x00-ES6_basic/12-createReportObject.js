export default function createReportObject(employeesList) {
    const allEmployees = {};
  
    for (const [department, employees] of Object.entries(employeesList)) {
      allEmployees[department] = [...employees];
    }
  
    const reportObject = {
      allEmployees,
      getNumberOfDepartments: function() {
        return Object.keys(this.allEmployees).length;
      },
    };
  
    return reportObject;
  }