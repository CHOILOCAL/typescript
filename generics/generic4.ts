// generic class
class Generic<T, K> {
    private _name: T;
    private _age: K;

    constructor(name: T, age: K) {
        this._name = name;
        this._age = age;
    }
}

new Generic("mark", 29);
new Generic<string, boolean>("mark", false);
// new Generic<string>(39) // error
