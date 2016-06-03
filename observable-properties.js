// Observable Properties Pattern

// More notes
// We want to react to changes in properties..

// Methods-as-Properties
var Book = function (name, price) {
  
  //Arrays to push callbacks into
  // The callbacks are rules to perform for each event (attempting to change price, pass tests for changing price)
  var checksBeforeChangingPrice = [],
      priceHasChangedReaction   = [];
  
  
  this.name = function (val) {
    return name;
  };
  
  this.price = function (val) {
    // check that val is not undefined and has actually changed
    if (val !== undefined && val !== price) {
      
      // loop though priceChanging callbacks, things that might prevent the price being changed
      for (var i = 0; i < checksBeforeChangingPrice.length; i++) {
        
        // if there is no element with this value, return the price
        if (!checksBeforeChangingPrice[i](this, val)) {
          return price;
        }
      }
      // Update price
      price = val;
      
      // loop through priceChanged array
      for (var i = 0; i < priceHasChangedReaction.length; i++) {
        
        // Loop and run each Reaction rule 
        priceHasChangedReaction[i](this);
      }
    }
    return price;
  };
  
  // previously: this.onPriceChanging
  this.addPriceChangingRule = function (callback) {
    checksBeforeChangingPrice.push(callback);
  };
  
  // previously: this.onPriceChanged
  this.addPriceChangedReaction = function (callback) {
    priceHasChangedReaction.push(callback);
  };
  
};

var book = new Book('Eloquent Javascript', 16.99);

console.log('The name is ' + book.name());

console.log('The price is $' + book.price());

// This effectively gets pushed onto the priceChanging array
book.addPriceChangingRule(function (b, price) {
  if (price > 100) {
    console.log('System error, price has gone unexpectedly high');
    return false;
  }
  return true; // continue
});


book.addPriceChangedReaction(function (b) {
  console.log('The book price has changed to: $' + b.price());
});


book.addPriceChangingRule(function(b, price) {
  if (price < 10) {
    console.log("$" + price + " is way too cheap for " + b.name());
    return false;
  }
  return true;
});

book.price(19.99);

book.price(200);

book.price(2);