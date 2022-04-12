// // Tuple type variable 
// var employee: [number, string] = [1, "Steve"];
// employee[0]= 22;

// console.log(employee);

// var user: [number, string, boolean, number, string];// declare tuple variable
// user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

// console.log(user);

var emp: [number | string, string][];
emp = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

emp.push([4, "Hemant"]);
emp.push(["4", "HE"]);

console.log(emp);



