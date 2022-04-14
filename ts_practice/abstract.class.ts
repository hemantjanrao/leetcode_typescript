// abstract class Hello {
//    name: string;

//     constructor(name: string){
//         this.name = name;
//         console.log(`Hello constructore created`);
        
//     }

//     display(){
//         console.log(`Hello ${this.name}`);
//     }

//     abstract show(message: string): void;
// }

// class SayName extends Hello {

//     name: string;

//     show(): void {
//         console.log(`your name is: ${this.name}`);       
//     }
// }

// const clsObj = new SayName("Hemant");
// clsObj.display();
// clsObj.show();


abstract class SayName{
    abstract name: string;
    abstract display(): void;
    abstract get showName();
}

class Names extends SayName{
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    display(): void {
        console.log(` Your name is ${this.name}`);
        
    }
    get showName(): string {
        return this.name;
    }
}

let nmsCls = new Names("Nms");
nmsCls.display();

console.log(nmsCls.showName);
