function helloString(message: string): string {
    return message;
}

function helloNumber(message: number): number {
    return message;
}

// 더 많은 반복된 함수들 ...
function hello(message: any): any {
    return message;
}

console.log(hello("Mark"));
console.log(hello(39));

function helloGeneric<T>(message: T): T {
    return message;
}

console.log(helloGeneric("Mark")); // 인자를 추론해준다
console.log(helloGeneric(37));
console.log(helloGeneric(true));
