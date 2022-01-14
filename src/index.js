import appendTask from "./createTask";
import { checkOffAllTasks } from "./checkOffTask.js";
import { removeAllTasks } from "./removeTasks";
import resetAllTasks from "./resetTasks";

document.querySelector(".task-btn").addEventListener("click", appendTask);
document.querySelector(".deleteAll").addEventListener("click", removeAllTasks);
document
  .querySelector(".checkOffAll")
  .addEventListener("click", checkOffAllTasks);
document.querySelector(".resetAll").addEventListener("click", resetAllTasks);

console.log("Hello!");