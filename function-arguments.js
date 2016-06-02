/*  Javascript doesn't care what you pass as arguments
 *  the arguments passed to a function are available
 * in the arguments method
 */

function sumUpFunction(){
  var x = 0;
  for (var i = 0; i < arguments.length; i++) {
    x = x + arguments[i];
  }
  return x;
}

console.log(sumUpFunction(1, 2, 34));