import { NumberCollections } from './NumberCollections';
export class Sorter {
	constructor(public collections: NumberCollections) {}

	sort(): void {
		const { length } = this.collections;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.collections.compare(j, j + 1)) {
					this.collections.swap(j, j + 1);
				}
			}
		}
	}
}
