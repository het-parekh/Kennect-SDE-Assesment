//Demonstrating Factorial of a number using recursion

var inp = 10
console.log(factorial(inp))

function factorial(i){
    if(i == 1){
        return 1
    }
    return i * factorial(i-1) 
}

//Output: 3628800