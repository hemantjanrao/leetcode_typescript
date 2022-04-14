// class Employee1 {

//     readonly empCode: number;
//     readonly empName: string;
    
//     constructor(empcode: number, name: string ) {
//             this.empCode = empcode;
//             this.empName = name;
//     }
// }
// let em = new Employee1(100,"Steve");
// console.log(em);


// interface IPerson {
//     name: string;
//     display():void;
// }

// interface IEmployee {
//     empCode: number;
// }

// class Employee2 implements IPerson, IEmployee {
//     empCode: number;
//     name: string;
    
//     constructor(empcode: number, name:string) {
//         this.empCode = empcode;
//         this.name = name;
//     }
    
//     display(): void {
//         console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
//     }
// }

// let per:IPerson = new Employee2(100, "Bill");
// per.display(); // Name = Bill, Employee Code = 100

// let empLOYEE:IPerson = new Employee2(100, "Bill");
// empLOYEE.display(); //Compiler Error: Property 'display' does not exist on type 'IEmployee'





class Car {
    name: string;
        
    constructor(name: string) {
        this.name = name;
    }
    
    run(speed:number = 0) {
        console.log("A " + this.name + " is moving at " + speed + " mph!");
    }
}

class Mercedes extends Car {
    
    constructor(name: string) {
        super(name);
    }
    
    run(speed = 150) {
        console.log('A Mercedes started')
        super.run(speed);
    }
}

class Honda extends Car {
    
    constructor(name: string) {
        super(name);
    }
    
    run(speed = 100) {
        console.log('A Honda started')
        super.run(speed);
    }
}

let mercObj = new Mercedes("Mercedes-Benz GLA");
let hondaObj = new Honda("Honda City")

mercObj.run();  // A Mercedes started A Mercedes-Benz GLA is moving at 150 mph!
hondaObj.run(); // A Honda started A Honda City is moving at 100 mph!