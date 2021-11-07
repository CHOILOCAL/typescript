class ClassName {
    private static instance: ClassName | null = null;
    private constructor() {}

    public static getInstance() {
        // ClassName 으로부터 만든 obj가 있으면 그걸 리턴
        // 없으면 만들어서 리턴
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }

        return ClassName.instance;
    }
}

// const className1 = new ClassName(); // private construtor로 직접 생성 불가
// const className2 = new ClassName();

const className1 = ClassName.getInstance();
const className2 = ClassName.getInstance();

console.log(a === b);
