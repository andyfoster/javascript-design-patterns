// Observable Properties Pattern

// More notes
// We want to react to changes in properties..

// Methods-as-Properties
var Book = function (name, price) {
  var priceChanging = [],
      priceChanged  = [];
  
  this.name = function (val) {
    return name;
  };
  
  this.price = function (val) {
    // check that val is not undefined and has actually changed
    if (val !== undefined && val !== price) {
      
      // loop though priceChanging array
      for (var i = 0; i < priceChanging.length; i++) {
        
        // if there is no element with this value, return 
//        console.log("here: " + priceChanging[0]);
        if (!priceChanging[i](this, val)) {
          return price;
        }
      }
      price = val;
      // loop through priceChanged array
      for (var i = 0; i < priceChanged.length; i++) {
        // add (this) to each element
        priceChanged[i](this);
      }
    }
    return price;
  };
  
  // previously: this.onPriceChanging
  this.addPriceChangingRule = function (callback) {
    priceChanging.push(callback);
  };
  
  // previously: this.onPriceChanged
  this.newPriceChangedReaction = function (callback) {
    priceChanged.push(callback);
  };
};

var book = new Book('Eloquent Javascript', 16.99);

console.log('The name is ' + book.name());

console.log('The price is $' + book.price());

// This effectively gets pushed onto the priceChanging array
book.addPriceChangingRule(function (b, price) {
  if (price > 100) {
    console.log('System error, price has gone unexpectedly high');
    return false; // stop here
  }
  return true; // what does this do? forward to new method?
});

book.newPriceChangedReaction(function (b) {
  console.log('The book price has changed to: $' + b.price());
});

book.addPriceChangingRule(function(b, price) {
  if (price < 10) {
    console.log("$" + price + "is way too cheap for " + b.name());
    return false;
  }
  return true;
});

book.price(19.99);

book.price(200);

book.price(2);