interface IPerson1 {
    name: string;
    age?: string;
    hello(): void;
}

class Person implements IPerson1 {
    name: string;
    age?: string | undefined;

    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
        console.log(`안녕하세요! ${this.name} 입니다. `);
        // throw new Error("Method not implemented.");
    }
}

const person: IPerson1 = new Person("Mark");
person.hello();
