const myUpskillProfile = {
  name: "Grace Aronu",
  age: 23,
  message: function() {
    console.log ("Hi, my name is " + this.name )  
  },
  hobbies: ["Crocheting", "Watching Movies", "Reading"]
};

myUpskillProfile.message();

console.log ("My second hobby is: " + myUpskillProfile.hobbies[1]);



// Callback Function

function taskProgress () {
    console.log("Finished task!")
}

function doTask (subject, callback) {
    console.log("Starting Upskill task 6...")
    callback()
}

doTask("Task 6", taskProgress);
