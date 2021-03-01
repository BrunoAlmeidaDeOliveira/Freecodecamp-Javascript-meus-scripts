let petString = "James has a pet cat,dog, fish and bird.";
let petRegex = /dog|cat|fish|bird/; // Change this line
let result = petRegex.test(petString);