// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const errorMessage = document.getElementById("errorMessage");
  const successMessage = document.getElementById("successMessage");

  if (!name || !email || !message) {
    errorMessage.textContent = "Please fill out all fields.";
    successMessage.textContent = "";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    successMessage.textContent = "";
  } else {
    errorMessage.textContent = "";
    successMessage.textContent = "Form submitted successfully!";
  }
});

// To-Do List functionality
const addTodoButton = document.getElementById("addTodo");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addTodoButton.addEventListener("click", function() {
  const todoText = todoInput.value.trim();
  if (todoText) {
    const li = document.createElement("li");
    li.textContent = todoText;
    todoList.appendChild(li);
    todoInput.value = "";
  }
});
