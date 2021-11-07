interface IPerson {
    name: string;
    age: number;
}

const iperson: IPerson = {
    name: "Mark",
    age: 39,
};

// type Keys = keyof IPerson;
// const keys: Keys = "name";
// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number

function getProp<T, K extends keyof T>(obj: T, key: K): T[keyof T] {
    return obj[key];
}

getProp(person, "name");
// getProp(person, "name1"); // error

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

setProp(person, "name", "Anna");
