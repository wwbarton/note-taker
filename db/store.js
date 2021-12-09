const fs = require("fs");
const util = require("util");

//we can not use promise objects instead of callbacks
const readFileAsync = util.promisify(fs.readFile); //
const writeFileAsync = util.promisify(fs.writeFile);

//create a  class for store with methods that read json file, write, get , add, remove notes

class Store {
  //read method

  read() {
    return readFileAsync("db/db.json", "utf-8");
  }

  getNotes() {
    return this.read().then((notes) => {
      //return the parsedNotes
    });
  }

  addNotes() {
    //this will be code
  }
  //write the rest of your methods in this manner
}
//export a newly created object with the methods on the prototype
module.exports = new Store(); //exporting a newly created object from calling the store class
