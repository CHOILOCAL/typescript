// type alias
type EatType = (food: string) => void;

// interface
interface IEat {
    (food: string): void;
}

// type aliase
type PersonList = string[];

// interface
interface IPersonList {
    [index: number]: string;
}

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtistsData {
    artist: { name: string }[];
}

// type alias
type ArtistResponseType = ArtistsData & ErrorHandling;

// interface
interface IAristsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistResponseType;
let iar: IAristsResponse;

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

type PetType = Bird | Fish;

// interface IPet extends PetType {}
// interface Pet implements PetType {}

interface MergingInterface {
    a: string;
}

interface MergingInterface {
    b: string;
}

let mi: MergingInterface;
// mi.a;
// mi.b;

// type MergingType = {
//     a: string;
// };

// type MergingType = {
//     b: string;
// };
