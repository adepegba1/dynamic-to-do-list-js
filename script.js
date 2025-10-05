// Wait until the entire HTML document is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select the "Add Task" button using its ID and store it in a constant
  const addButton = document.getElementById("add-task-btn");

  // Select the task input field where users will type new tasks
  const taskInput = document.getElementById("task-input");

  // Select the unordered list that will display all the added tasks
  const taskList = document.getElementById("task-list");

  // Define a function that will handle adding new tasks to the list
  const addTask = () => {
    // Get the text entered by the user and remove any extra spaces
    const taskText = taskInput.value.trim();

    // Check if the user entered something
    if (taskText === "") {
      // Alert the user if the input is empty
      alert("Enter a task");
    } else {
      // Create a new list item (<li>) for the new task
      const listElement = document.createElement("li");
      listElement.textContent = taskText; // Set the task text in the list item

      // Create a "Remove" button for deleting the task later
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove"; // Button text
      removeButton.className = "remove-btn"; // Add a CSS class for styling

      // Add an event listener so clicking "Remove" deletes the task
      removeButton.addEventListener("click", () => {
        listElement.remove(); // Remove the parent <li> element
      });

      // Add the remove button inside the list item
      listElement.appendChild(removeButton);

      // Add the completed <li> (task + button) to the unordered list
      taskList.appendChild(listElement);

      // Clear the input field for the next task
      taskInput.value = "";
    }
  };

  // Add an event listener to the "Add Task" button
  // When clicked, it calls the addTask function
  addButton.addEventListener("click", () => {
    addTask();
  });

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  addTask();
});
