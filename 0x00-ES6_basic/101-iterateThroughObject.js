export default function iterateThroughObject(reportWithIterator) {
    const employeesStringArray = [];
  
    for (const employee of reportWithIterator) {
      employeesStringArray.push(employee);
    }
  
    return employeesStringArray.join(' | ');
  }