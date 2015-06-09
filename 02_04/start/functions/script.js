window.onload = function() {

    // This function accepts an object as a parameter then logs the object's properties
        var myFunction = function (myObject) {
            // Log this object's properties
            console.log(this.firstName);
            console.log(this.age);
            console.log(this.saying);
            // Log this object
            console.log(this);
        };

    // Create an object
        var myObject = {firstName: "Jason", saying: "Yep, Yep, Yep", age: 33};

    // Pass object to the speak function
        myFunction.call(myObject);

};