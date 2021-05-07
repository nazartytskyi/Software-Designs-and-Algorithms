import { Item } from './item';
import { Pages } from './pages';

export class Book extends Item {
    private title: string;
    private author: string;
    protected pages: Pages;
    constructor(title: string, author: string, pages: Pages) {
        super();

        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getAuthor(): string {
        return this.author;
    }

    setAuthor(author: string) {
        this.author = author;
    }

    getTitle(): string {
        return this.title;
    }

    seTtitle(title: string) {
        this.title = title;
    }

    toString() {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.getPagesAmount()}`;
    }
}
