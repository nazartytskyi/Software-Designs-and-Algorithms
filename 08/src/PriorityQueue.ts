export interface IPriorityQueue<T> {
  push(priority: number, data: T);
  pop(): T;
}

export interface IPriorityQueueItem<T> {
  priority: number;
  data: T;
  next?: IPriorityQueueItem<T>;
}

export class PriorityQueue implements IPriorityQueue<any> {
  private head: IPriorityQueueItem<any>;

  push(priority: number, data: any) {
    if (!this.head) {
      return this.pushHead(priority, data);
    }

    let current = this.head;
    while (current.next && current.next.priority > priority) {
      current = current.next;
    }

    const { next } = current;
    current.next = { priority, data, next };
  }

  private pushHead(priority: number, data: any) {
    this.head = { priority, data };
  }

  pop() {
    if (!this.head) {
      return;
    }

    const { data } = this.head;
    this.head = this.head.next;

    return data;
  }
}
