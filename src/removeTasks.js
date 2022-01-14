const undoneTasks = document.querySelector(".undone-tasks");
const doneTasks = document.querySelector(".done-tasks");
const hrEl = document.querySelector("hr");

function removeTask(e) {
  if (e.path[3].className === "undone-tasks") {
    undoneTasks.removeChild(e.path[2]);
  } else {
    doneTasks.removeChild(e.path[2]);
  }
  if (!undoneTasks.hasChildNodes() || !doneTasks.hasChildNodes()) {
    hrEl.classList.add("undisplayed");
  }
}

function removeAllTasks() {
  undoneTasks.innerHTML = "";
  doneTasks.innerHTML = "";
}

export { removeTask, removeAllTasks };
