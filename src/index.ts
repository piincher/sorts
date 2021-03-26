import { Sorter } from './Sorter';
import { NumberCollections } from './NumberCollections';
import { CharacterCollection } from './CharacterCollection';

// const numberCollections = new NumberCollections([ 2, 1, -1, 3 ]);

// const sorter = new Sorter(numberCollections);
// sorter.sort();

// console.log(numberCollections.data);

const characterCollection = new CharacterCollection('Piincher');

const sorter = new Sorter(characterCollection);

sorter.sort();
console.log(characterCollection.data);
