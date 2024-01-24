function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("tasks");

        const taskElement = document.createElement("div");
        taskElement.className = "task";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = toggleTask;

        const taskLabel = document.createElement("label");
        taskLabel.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = deleteTask;

        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskLabel);
        taskElement.appendChild(deleteButton);

        taskList.appendChild(taskElement);

        taskInput.value = "";
    }
}

function toggleTask() {
    const taskLabel = this.nextElementSibling;
    taskLabel.classList.toggle("completed");
}

function deleteTask() {
    const taskElement = this.parentElement;
    taskElement.remove();
}