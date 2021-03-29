// import { Sorter } from './Sorter';
// import { NumberCollections } from './NumberCollections';
// import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';

// // const numberCollections = new NumberCollections([ 2, 1, -1, 3 ]);

// // const sorter = new Sorter(numberCollections);
// // sorter.sort();

// // console.log(numberCollections.data);

// const characterCollection = new CharacterCollection('Piincher');

// const sorter = new Sorter(characterCollection);

// sorter.sort();
// console.log(characterCollection.data);
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(-12);
linkedList.add(-1);
linkedList.add(90);

const sorter = new Sorter(linkedList);

sorter.sort();
linkedList.print();
