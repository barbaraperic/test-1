const undoneTasks = document.querySelector(".undone-tasks");
const doneTasks = document.querySelector(".done-tasks");
const hrEl = document.querySelector("hr");

function resetAllTasks() {
  for (let i = doneTasks.childNodes.length - 1; i >= 0; i -= 1) {
    doneTasks.childNodes[i].childNodes[1].childNodes[1].classList.add(
      "fa-circle"
    );
    doneTasks.childNodes[i].childNodes[1].childNodes[1].classList.remove(
      "fa-solid"
    );
    doneTasks.childNodes[i].childNodes[1].childNodes[1].classList.add(
      "fa-regular"
    );
    doneTasks.childNodes[i].childNodes[1].childNodes[1].classList.remove(
      "fa-check"
    );
    doneTasks.childNodes[i].firstChild.classList.remove("crossedOut");
    undoneTasks.appendChild(doneTasks.childNodes[i]);
    if (!doneTasks.hasChildNodes()) {
      hrEl.classList.add("undisplayed");
    }
  }
}

export default resetAllTasks;
