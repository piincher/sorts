import { NumberCollections } from './NumberCollections';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';

const numberCollections = new NumberCollections([ 2, 1, -1, 3 ]);
numberCollections.sort();
// // const sorter = new Sorter(numberCollections);
// // sorter.sort();

console.log(numberCollections.data);

const characterCollection = new CharacterCollection('Piincher');
characterCollection.sort();

console.log(characterCollection.data);
const linkedList = new LinkedList();
linkedList.sort();
linkedList.add(500);
linkedList.add(-12);
linkedList.add(-1);
linkedList.add(90);

linkedList.print();
