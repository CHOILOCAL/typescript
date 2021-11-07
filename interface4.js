"use strict";
var p41 = {
    name: "Mark",
    age: 39,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB2E4");
    },
};
var p42 = {
    name: "Mark",
    age: 39,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB2E4");
    },
};
// Arrow function
// const p43: Person4 = {
// name: "Mark",
// age: 39,
// hello: (): void => {
//     console.log(`안녕하세요! ${this.name} 입니다`);
// },
// };
var p44 = {
    name: "Mark",
    age: 39,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB2E4");
    },
};
p41.hello(); // 안녕하세요! Mark 입니다
p42.hello(); // 안녕하세요! Mark 입니다
