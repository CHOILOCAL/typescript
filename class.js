"use strict";
var Class = /** @class */ (function () {
    function Class(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "mark";
        this.country = "KOREA";
    }
    Class.prototype.hello = function () {
        // 'readOnly' Error
        // this.country = "USA";
    };
    return Class;
}());
