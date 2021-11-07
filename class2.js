"use strict";
var Class2 = /** @class */ (function () {
    function Class2() {
    }
    Class2.hello = function () {
        console.log("hi", Class2.CITY);
    };
    Class2.prototype.change = function () {
        Class2.CITY = "LA";
    };
    Class2.CITY = "SEOUL";
    return Class2;
}());
var c2 = new Class2();
// c2.hello(); // static method일 경우 에러
Class2.hello();
// Class2.CITY; // private property일 경우 에러
var c22 = new Class2();
c22.change();
