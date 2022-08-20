import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumberCollection";

const numberCollection = new NumbersCollection([6, 3, -5, 0]);
const sort = new Sorter(numberCollection);
sort.sort();
console.log("hid");
console.log("sorct", numberCollection.data);
