var Calc = function (start) {
    "use strict";
    var self = this;

    this.add = function (x) {
        start = start + x;

        return this;
    };

    this.multiply = function (x) {
        start = start * x;

        return this;
    };

    this.equals = function (callback) {
        callback(start);

        return self;
    };
};

// module.exports = Calc
// you will need to use new Calc(0);
// ("new" and constructor value)

// or add this anonymous object:
// and use Calc.add(9) etc
module.exports = {
    add: function (x, y) {
       return new Calc(x).add(y || 0);
    },
    multiply: function (x, y) {
        return new Calc(x).multiply(y || 0);
    }
};