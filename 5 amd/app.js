/* How do we make sure that external
 *  modules are loaded?
*/
var Calc = require('./calc.js');

Calc
    .add(1, 2)
    .multiply(3)
    .equals(function (result) {
        console.log(result);
    });