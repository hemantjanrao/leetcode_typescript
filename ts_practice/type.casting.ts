// let code: any = 123; 
// let employeeCode: number = <number> code; 
// console.log(typeof(employeeCode)); //Output: number

// let employee = <{ name: string, code: number}>{};
// employee.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
// employee.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'
// console.log(employee);

// interface Employee { 
//     name: string; 
//     code: number; 
// } 

// let employee = <Employee> { }; 
// employee.name = "John"; // OK
// employee.code = 123; // OK
// console.log(employee);


let code: any = 123; 
let employeeCode = code as number;
console.log(employeeCode);
