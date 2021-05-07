import { Item } from './item';
import { Page } from './page';

export class Pages {
    private pages: Page[];

    constructor(pages: Page[]) {
        this.pages = pages;
    }

    public getItemPages(item: Item): Page[] {
        return this.pages.map((page) => {
            const pageDescription = page.toString();

            page.toString = () => `${item}, ${pageDescription}`;

            return page;
        });
    }

    public getPagesAmount(): number {
        return this.pages.length;
    }
}
