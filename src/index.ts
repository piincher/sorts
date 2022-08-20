import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumberCollection";
import { CharacterClass } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";
const numberCollection = new NumbersCollection([6, 3, -5, 0]);
numberCollection.sort();
// console.log("hid");
console.log("sorct", numberCollection.data);

const characterCollection = new CharacterClass("Xaayb");
characterCollection.sort();

console.log(characterCollection.data);
const linkedList = new LinkedList();
linkedList.sort();
linkedList.add(500);
linkedList.add(-3);
linkedList.add(-1);

linkedList.print();
