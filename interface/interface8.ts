interface Person8 {
    name: string;
    age?: number;
    readonly gender: string;
}

const p81: Person8 = {
    name: "Mark",
    gender: "male",
};

// readonly로 한번 지정한 value에서 수정 불가
// p81.gender = "female";
