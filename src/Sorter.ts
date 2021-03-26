interface Sortable {
	length: number;
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex: number): void;
}
export class Sorter {
	constructor(public collections: Sortable) {}

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
