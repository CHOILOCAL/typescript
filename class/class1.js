"use strict";
// class => object
// {mark: 'male', jade: 'male'}
// {chloe: 'female', alex: 'male', anna: 'female}
// index signature
var Students = /** @class */ (function () {
    function Students() {
    }
    return Students;
}());
var a = new Students();
a.mark = "male";
a.jade = "male";
console.log(a);
var b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";
