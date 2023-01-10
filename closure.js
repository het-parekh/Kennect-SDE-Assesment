//Demonstrating Closures


var x = 10;

function A(a) {
  var b = 20;

  function B(c) {
    var d = 30;
    return x + a + b + c + d
  }
  return B(10);
}

var res = A(5); // Closure 

console.log(res) // 75