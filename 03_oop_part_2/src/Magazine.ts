import { Item } from './item';
import { Pages } from './pages';

export class Magazine extends Item {
    private title: string;
    protected pages: Pages;
    constructor(title: string, pages: Pages) {
        super();

        this.title = title;
        this.pages = pages;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    toString() {
        return `Magazine: ${this.title} with number of pages: ${this.pages.getPagesAmount()}`;
    }
}
