class Class2 {
    private static CITY = "SEOUL";
    public static hello() {
        console.log(`hi`, Class2.CITY);
    }
    public change() {
        Class2.CITY = "LA";
    }
}

const c2 = new Class2();
// c2.hello(); // static method일 경우 에러

Class2.hello();
// Class2.CITY; // private property일 경우 에러
const c22 = new Class2();
c22.change();
