document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    
    addBtn.addEventListener('click', addTodo);

    function addTodo(){
        // Get input value
        const todoInput = document.getElementById("todo-input");
        // Remove white space
        const todoText = todoInput.value.trim();
        // Condition for creating list item
        if(todoText !== ""){
            const li = document.createElement("li");
            // Set text content to input value
            li.textContent = todoText;

            // Create delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            // Apply CSS
            deleteButton.classList.add("delete-btn");
            deleteButton.onclick = function(){
                li.remove();
            };
            // Append delete button to list item
            li.appendChild(deleteButton);
            // Append list item to the list
            document.getElementById("todo-list").appendChild(li);
            // Clear input field
            todoInput.value = "";
        }
    }
});
