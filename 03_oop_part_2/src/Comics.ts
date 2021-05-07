import { Item } from './item';
import { Pages } from './pages';

export class Comics extends Item {
    private title: string;
    protected pages: Pages;
    private author: string;
    private artist: string;

    constructor(title: string, author: string, artist: string, pages: Pages) {
        super();

        this.title = title;
        this.pages = pages;
        this.author = author;
        this.artist = artist;
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

    setTitle(title: string) {
        this.title = title;
    }

    getArtist(): string {
        return this.artist;
    }

    setArtist(title: string) {
        this.artist = title;
    }

    toString() {
        return `Comics: ${this.title} by ${this.author}, the artist is ${
            this.artist
        }, number of pages: ${this.pages.getPagesAmount()}`;
    }
}
