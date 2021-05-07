import { PagesIterableMixin } from './pages-iterable.mixin';

export abstract class Item extends PagesIterableMixin(Object) {
    public abstract toString(): string;
}
