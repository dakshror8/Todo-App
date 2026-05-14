const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", () => {

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
});

