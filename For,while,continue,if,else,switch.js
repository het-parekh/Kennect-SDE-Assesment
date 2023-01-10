// Demonstration of For, While, Continue, If, Else, Switch

// Looping over array of 5 elements
var arr = [1,2,3,4,5]
n = arr.length
for (let i = 0;i<n;i++){ //Using For Loop
    console.log(arr[i])
}
let i = 0
while(i<n){ // Using While Loop
    console.log(arr[i])
    i++;
}
//Output:12345


// Looping over elements of array and printing them if they are even

for(let i=0;i<n;i++){ // Using For Loop and If 
    if(arr[i]%2!=0){
        continue
    }
    console.log(arr[i])
}

// Looping over elements of array and printing them either even or odd
//Using For Loop and Switch case
console.log(arr)
for(let i=0;i<n;i++){
    let choice = arr[i]%2
    switch(choice){
        case 0:
            console.log("even")
            break
        case 1:
            console.log("odd")
            break
        
    }
}








