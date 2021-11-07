class Inheritance {
    constructor(protected _name: string, private _age: number) {}

    public print(): void {
        console.log(`이름은 ${this._name} 이고 나이는 ${this._age}`);
    }

    protected printName(): void {
        console.log(this._name, this._age);
    }
}

const inheritance = new Inheritance("Mark", 39);

inheritance.print();

class Child extends Inheritance {
    public gender = "male";

    constructor(age: number) {
        super("choi", age); // 부모를 먼저 셋팅해주어야 함
        this.printName();
    }
}

const cc = new Child(5);
cc.print; // public 만
// cc._age; // x
cc.gender = "female";
