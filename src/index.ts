import { Sorter } from './Sorter';
import { NumberCollections } from './NumberCollections';
const numberCollections = new NumberCollections([ 2, 1, -1, 3 ]);

const sorter = new Sorter(numberCollections);
sorter.sort();

console.log(numberCollections.data);
