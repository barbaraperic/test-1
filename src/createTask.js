import { checkOffTask } from "./checkOffTask.js";
import { removeTask } from "./removeTasks";

const undoneTasks = document.querySelector(".undone-tasks");
const doneTasks = document.querySelector(".done-tasks");
const taskInput = document.querySelector(".task-input");
const hrEl = document.querySelector("hr");

class EmptyTask {
  constructor(content) {
    this.content = content;
  }

  createTask() {
    const task = document.createElement("li");
    const iElement1 = document.createElement("i");
    const iElement2 = document.createElement("i");
    const divEl = document.createElement("div");
    const spanEl = document.createElement("span");
    spanEl.innerText = this.content;
    task.appendChild(spanEl);
    task.appendChild(divEl);
    iElement2.classList.add("fa-solid", "fa-trash-can");
    iElement2.addEventListener("click", removeTask);
    divEl.appendChild(iElement2);
    iElement1.classList.add("fa-regular", "fa-lg", "fa-circle");
    divEl.appendChild(iElement1);
    iElement1.addEventListener("click", checkOffTask);
    return task;
  }
}

function appendTask() {
  if (taskInput.value !== "") {
    let newTask = new EmptyTask(taskInput.value);
    newTask = newTask.createTask();
    undoneTasks.appendChild(newTask);
    taskInput.value = "";
  }
  if (doneTasks.hasChildNodes()) {
    hrEl.classList.remove("undisplayed");
  }
}

export default appendTask;
