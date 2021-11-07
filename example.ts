class Person1 {
    public name: string = "";
    public age!: number; // not initializer
    private _age!: number;

    public constructor(name: string) {
        this.name = name;
    }

    public async init() {}
}

const p11 = new Person1("Hyunji");
p11.age = 39;
console.log(p11.age);
