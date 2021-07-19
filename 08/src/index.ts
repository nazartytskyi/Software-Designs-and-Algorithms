import { PriorityTaskRunner } from "./PriorityTaskRunner";

const taskRunner = new PriorityTaskRunner();

for (let i = 0; i < 10000; i++) {
  const priority = Math.random();
  taskRunner.addTask(priority, () => console.log(priority));
}

console.time("Execution time: ");
taskRunner.run();
console.timeEnd("Execution time: ");
