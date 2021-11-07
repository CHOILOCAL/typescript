class Class {
    public readonly name: string = "mark";
    private readonly country: string;

    public constructor(private _name: string, private age: number) {
        this.country = "KOREA";
    }

    hello() {
        // 'readOnly' Error
        // this.country = "USA";
    }
}
