export class Sorter {
	constructor(public collections) {}

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
