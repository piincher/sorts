import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumberCollection";
import { CharacterClass } from "./CharacterCollection";
// const numberCollection = new NumbersCollection([6, 3, -5, 0]);
// const sort = new Sorter(numberCollection);
// sort.sort();
// console.log("hid");
// console.log("sorct", numberCollection.data);

const characterCollection = new CharacterClass("Xaayb");

const sorter = new Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data);
