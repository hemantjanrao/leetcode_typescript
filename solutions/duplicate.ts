// function removeDuplicates(nums: number[]): number {
//     let final:Array<number> = [];

//     // handle 0 and 1 base case
//     if (nums.length < 2) {
//         return nums.length;
//     }

//     for(let val in nums){
//        if(!final.includes(nums[val])){
//            final.push(nums[val]);
//        }
//     }
//     console.log("Array => ", final);
//     return final.length;
// };

// const RES:number = removeDuplicates([1,1,2]);
// console.log(`RES => `, RES);

function removeDuplicates1(nums: number[]): number {
    // create two pointers
    let ptr1 = 0;
    let ptr2 = 0;
    
    // handle 0 and 1 base case
    if (nums.length < 2) {
        return nums.length;
    }
    
    // iterate over the array from left to right
    while(ptr2 < nums.length) {
        ptr2 += 1;
        // when a non-duplicate value is found
        if (nums[ptr1] !== nums[ptr2]) {
            // splice out any prior duplicate values
            let duplicates = ptr2 - ptr1 - 1;
            if (duplicates) {
                nums.splice(ptr1, duplicates);    
            }
            // reset the pointers to account for smaller array
            ptr2 = ptr2 - duplicates;
            ptr1 = ptr2;
        }
    }
    return nums.length;
}
const RES1:number = removeDuplicates1([1,1,2]);
console.log(`RES => `, RES1);