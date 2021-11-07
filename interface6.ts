interface Iperson2 {
    name: string;
    age?: number;
}

interface IKorean extends Iperson2 {
    city: string;
}

const k: IKorean = {
    name: "이웅재",
    city: "서울",
};
