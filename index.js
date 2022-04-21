var employee = {
  "id":101,
  "name":"kalyan",
  "loc":"hyderabad"
}
console.log(employee);
employee.email="kalyan@agmail.com";
console.log("--------------------------------");
console.log("insert a property inside object of the employee");
console.log(employee);
employee.loc="kphb"
console.log("--------------------------------");
console.log("update a property inside object of the employee");
console.log(employee);
delete employee.email;
console.log("--------------------------------");
console.log("Delete a property inside object of the employee");
console.log(employee);
console.log("--------------------------------");
console.log("Retrive a property inside object of the employee");
console.log(employee.id,employee.name,employee.loc);