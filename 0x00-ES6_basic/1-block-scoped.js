export default function taskBlock(trueorFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
