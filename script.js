const myUpskillProfile = {
  name: "Grace Aronu",
  age: 23,
  message: function() {
    () => {
    console.log ("Hi, my name is " + this.name )
  }   
  },
  hobbies: ["Crocheting", "Watching Movies", "Reading"]
};

console.log (myUpskillProfile.hobbies[1]);

