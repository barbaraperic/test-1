import displayPkmnCard from "./API";

const undoneTasks = document.querySelector(".undone-tasks");
const doneTasks = document.querySelector(".done-tasks");
const hrEl = document.querySelector("hr");

function checkOffTask(e) {
  e.target.classList.toggle("fa-circle");
  e.target.classList.toggle("fa-solid");
  e.target.classList.toggle("fa-regular");
  e.target.classList.toggle("fa-check");
  e.path[2].firstChild.classList.toggle("crossedOut");
  if (e.path[3].className === "undone-tasks") {
    doneTasks.appendChild(e.path[2]);
  } else {
    undoneTasks.appendChild(e.path[2]);
  }
  if (doneTasks.hasChildNodes() && undoneTasks.hasChildNodes()) {
    hrEl.classList.remove("undisplayed");
  } else {
    hrEl.classList.add("undisplayed");
  }
  displayPkmnCard();
}

function checkOffAllTasks() {
  for (let i = undoneTasks.childNodes.length - 1; i >= 0; i -= 1) {
    undoneTasks.childNodes[i].childNodes[1].childNodes[1].classList.remove(
      "fa-circle"
    );
    undoneTasks.childNodes[i].childNodes[1].childNodes[1].classList.add(
      "fa-solid"
    );
    undoneTasks.childNodes[i].childNodes[1].childNodes[1].classList.remove(
      "fa-regular"
    );
    undoneTasks.childNodes[i].childNodes[1].childNodes[1].classList.add(
      "fa-check"
    );
    undoneTasks.childNodes[i].firstChild.classList.add("crossedOut");
    doneTasks.appendChild(undoneTasks.childNodes[i]);
    if (!undoneTasks.hasChildNodes()) {
      hrEl.classList.add("undisplayed");
    }
  }
}

export { checkOffTask, checkOffAllTasks };
