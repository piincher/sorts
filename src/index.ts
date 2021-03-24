class Sorter {
	constructor(public collections: number[]) {}

	sort(): void {
		const { length } = this.collections;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.collections[j] > this.collections[j + 1]) {
					const leftHand = this.collections[j];
					this.collections[j] = this.collections[j + 1];
					this.collections[j + 1] = leftHand;
				}
			}
		}
	}
}
const sorter = new Sorter([ 10, 3, -5, 0 ]);
sorter.sort();

console.log(sorter.collections);
