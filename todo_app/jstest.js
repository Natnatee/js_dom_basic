document.addEventListener("DOMContentLoaded",()=>{
	const taskInput = document.querySelector("#task-input");
	const addTaskBtn = document.querySelector("#add-task-btn");
	const searchInput = document.querySelector("#search-input");
	const searchBtn = document.querySelector("#search-btn");
	const taskList = document.querySelector("#task-list");

    let tasks = []

    addTaskBtn.addEventListener("click", ()=>{
        const taskText = addTaskBtn.ariaValueMax.trim;
        if(taskText){
            const task = {
                id: Date.now(),
                text: taskText,
            };
        }
    })
})