// ## Add Numbers Of Nested Array

// Write a function addNumsNestedArray that receives an array of numbers and arrays, and returns the sum of all the numbers
//  (including those in the nested arrays).

// Note: Use recursion to solve this exercise.

// addNumsNestedArray([1, [2, 3], 4]); // 10
// addNumsNestedArray([1, [1, 1], [1, [1, 1]], 1]); // 7

function flatten ( list ) { 
    const [ first,...rest] = list;
    if (first === undefined) return [];
    if (Array.isArray (first)) return flatten([...first,...rest]);
    
    return [first].concat(flatten(rest));

}




function addNumsNestedArray (array) { 
    array = flatten (array);
    if ( array.length >= 1 ) {
        return array [0] + addNumsNestedArray( array.slice(1) );
    }
     return false 
}

console.log (addNumsNestedArray([1, [2, 3], 4]));