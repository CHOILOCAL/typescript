"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.hello = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB2E4. ");
        // throw new Error("Method not implemented.");
    };
    return Person;
}());
var person = new Person("Mark");
person.hello();
