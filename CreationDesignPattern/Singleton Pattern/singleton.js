/**
 *  Singleton Pattern create and return the first instance of an Object
 */
let instance = null;
class Driver {
  constructor(name, datetime) {
    if (!instance) {
      this.name = name;
      this.datetime = datetime;
      instance = this;
    } else {
      console.log("Print the already created instance: ", instance);
      return instance;
    }
  }
}

// Create a first instance of Student Class
const firstServer = new Driver("Server instance created", new Date());

// This does not create a another instance of class and return the already created instance
const SecondServer = new Driver("Create second instance of Server", new Date());

// Print both the server.
console.log(firstServer, SecondServer);
