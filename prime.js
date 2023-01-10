//Given a number x, find out if its a prime number or not, use js and find out the difference between Next prime number after X and X.

var input = 31

//Check if prime
function isPrime(n){
    if (n<2){
        return false
    }
    if(n%2==0){
        return false
    }
    if(n == 2){
        return true
    }
    for(let i = 3; i<=Math.sqrt(n);i+=2){
        if (n%i == 0){
            return false
        }
    }
    return true
}
console.log(isPrime(input)) //true

//Check difference
var diff
let i = input+1
while (!isPrime(i)){
    i+=1
}
console.log(i-input) //6

