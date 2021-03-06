
// ## Reverse String

// Write a function called reverseString that receives a string and returns the reversed string.

// Note: Use recursion to solve this exercise.

// reverse("hello world"); // "dlrow olleh"

function reverseString ( str ) { 
    if ( str.length === 1 ) { 
        return str[0]
    } else if ( str.length > 1 ) {
        return reverseString ( str.slice (1)) + str[0];
    }
    return false 
}

console.log(reverseString("Hello World"))