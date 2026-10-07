const taskInput = document.querySelector("#task-input");
const addButton = document.querySelector("#add-button");
const taskList = document.querySelector("#task-list");

addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  listItem.addEventListener("click", function () {
    listItem.classList.toggle("completed");
  });

  taskList.appendChild(listItem);
  taskInput.value = "";
});
