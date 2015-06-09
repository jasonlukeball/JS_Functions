function plus(a,b) {

    return (
        // Log a + b
        console.log(a+b),
            // Log what is currently 'this'
            console.log(this),
            // Log the arguments
            console.log(arguments)
    )
}

// Call the function
plus(100,200);

