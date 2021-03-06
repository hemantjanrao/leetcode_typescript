// interface KeyValueProcessor
// {
//     (key: number, value: string): void;
// }

// function addKeyValue(key:number, value:string):void { 
//     console.log('addKeyValue: key = ' + key + ', value = ' + value)
// }

// function updateKeyValue(key: number, value:string):void { 
//     console.log('updateKeyValue: key = '+ key + ', value = ' + value)
// }
    
// let kvp: KeyValueProcessor = addKeyValue;
// kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 

// kvp = updateKeyValue;
// kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 




interface NumList {
    [index:number]:number
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];

interface IStringList {
    [index:string]:string
}

let strArr : IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";

console.log(strArr);


