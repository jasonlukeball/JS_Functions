//
var speak = function(saywhat) {
  console.log(saywhat);
};

// Setup Dog Object
var Dog = function() {
    var name;
    var breed;
};

// Setup Cat Object
var Cat = function() {
    var name;
    var breed;
};

// Gives the Dog/Cat object the ability to use the speak function
// This is a way of expanding the Dob object's functionality
Dog.prototype.speak = speak;
Cat.prototype.speak = speak;

firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";
firstDog.speak('woof');

firstCat = new Cat;
firstCat.name = "Sniggles";
firstCat.breed = "Manx";
firstCat.speak('meow');

