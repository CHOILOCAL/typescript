interface Person4 {
    name: string;
    age: number;
    hello(): void;
}

const p41: Person4 = {
    name: "Mark",
    age: 39,
    hello: function (): void {
        console.log(`안녕하세요! ${this.name} 입니다`);
    },
};

const p42: Person4 = {
    name: "Mark",
    age: 39,
    hello(): void {
        console.log(`안녕하세요! ${this.name} 입니다`);
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

const p44: Person4 = {
    name: "Mark",
    age: 39,
    hello: function (this: Person4): void {
        console.log(`안녕하세요! ${this.name} 입니다`);
    },
};

p41.hello(); // 안녕하세요! Mark 입니다
p42.hello(); // 안녕하세요! Mark 입니다
