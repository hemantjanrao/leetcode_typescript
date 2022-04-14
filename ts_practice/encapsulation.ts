// class Employee4 {
//     public empCode: number;
//     empName: string;
// }

// let emp11 = new Employee4();
// emp11.empCode = 123;
// emp11.empName = "Swati";


class Employee {
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number){
        this.empName = name;
        this.empCode = code;
    }
}

class SalesEmployee extends Employee{
    private department: string;
    protected name: string;
    
    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }
}

let emp44 = new SalesEmployee("John Smith", 123, "Sales");
// emp44.name; //Compiler Error