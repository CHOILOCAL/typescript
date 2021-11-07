function helloBasic<T, U>(message: T, comment: U): T {
    return message;
}

helloBasic<string, number>("choi", 39);
// helloBasic<number>(1);
// helloBasic(true); // 추론

function helloArray<T>(message: T[]): T {
    return message[0];
}

helloArray(["hello", "world"]);
helloArray(["hello", 5]);

// 튜플 형태
function helloTuple<T, K>(message: [T, K]): T {
    return message[0];
}

helloTuple(["Hello", "World"]);
helloTuple(["Hello", 5]);
