import { Pages } from './pages';

type Constructor = new (...args: any[]) => {};

export function PagesIterableMixin<T extends Constructor>(superclass: T) {
    return class extends superclass {
        protected pages!: Pages;

        *[Symbol.iterator]() {
            const itemPages = this.pages.getItemPages(this);

            for (let i = 0; i < this.pages.getPagesAmount(); i++) {
                yield itemPages[i];
            }
        }
    };
}
