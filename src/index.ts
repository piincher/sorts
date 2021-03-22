class Sorter {
	constructor(public collections: number[]) {}

	sort(): void {}
}
const sorter = new Sorter([ 2, 34, 5, -1 ]);
sorter.sort();

console.log(sorter.collections);
