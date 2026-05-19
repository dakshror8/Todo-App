const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", () => {
    const input = document.querySelector("#taskInput");

    const error = document.querySelector("#errorMsg");
    
    if(input.value === ""){
        error.textContent = "Invalid input";
        error.style.color = "red";
        return;
    }

    errorMsg.textContent = "";
    const li = document.createElement("li");

    li.textContent =
        document.querySelector("#taskInput").value;

    document.querySelector("#taskList")
        .appendChild(li);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    const markCompleteBtn = document.createElement("button");
    markCompleteBtn.textContent = "Mark As Complete";
    li.appendChild(markCompleteBtn);
    markCompleteBtn.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    })
});

