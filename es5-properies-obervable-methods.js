// Using ES5 Properties to implement the Observable Methods pattern
// Limited browser support though

function Book () {
	var name = '';
	Object.defineProperty(this, 'name', {
		get: function () {
			return name;
		},
		set: function (val) {
			if (val.length > 8) {
				console.log("The tite, " + val + ", is too long");
				return false;
			}
			console.log(val);
			name = val;
		}
	});
}

var book = new Book;

book.name = "Eloquent JS";

console.log(book.name);

book.name = "My book"

console.log(book.name);
