window.onload = function() {


var Dog = function() {      // Object names should be capitalized
    var name;
    var breed;
    console.dir(this);
};

// Create a new instance of the Dog Object
firstDog = new Dog;
// Assign Properties
firstDog.name = "Russel";
firstDog.breed = "Chitsu";
console.log(firstDog);


// Create another new instance of the Dog Object
secondDog = new Dog;
// Assign Properties
secondDog.name = "Molly";
secondDog.breed = "Lhasa Apso";
console.log(secondDog);


};



