// Select DOM elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add Task Function
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
  addTask(taskText);
  taskInput.value = ""; // Clear input field
});

function addTask(taskText) {
  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.textContent = taskText;

  // Create a button container
  const btnContainer = document.createElement("div");
  btnContainer.className = "btn-container";

  // Create edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.addEventListener("click", () => editTask(li, span));

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", () => li.remove());

  // Append buttons to the button container
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(deleteBtn);

  li.appendChild(span); // Add task text
  li.appendChild(btnContainer); // Add button container to the task item
  taskList.appendChild(li);
}

// Function to edit a task
function editTask(taskItem, taskSpan) {
  const newTaskText = prompt("Edit Task:", taskSpan.textContent);
  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskSpan.textContent = newTaskText.trim();
  } else if (newTaskText === "") {
    alert("Task cannot be empty.");
  }
}
