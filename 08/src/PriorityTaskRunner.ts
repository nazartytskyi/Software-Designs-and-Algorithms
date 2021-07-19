import { PriorityQueue, IPriorityQueue } from "./PriorityQueue";

interface IPriorityTaskRunner<T> {
  addTask(priority: number, task: () => void);
  run();
}

interface ITask {
  run: () => void;
}

export class PriorityTaskRunner implements IPriorityTaskRunner<ITask> {
  private queue: IPriorityQueue<ITask>;

  constructor() {
    this.queue = new PriorityQueue();
  }

  addTask(priority: number, task: () => void) {
    this.queue.push(priority, { run: task });
  }

  run() {
    let task = this.queue.pop();

    while (task) {
      task.run();
      task = this.queue.pop();
    }
  }
}
