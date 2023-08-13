const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const light = document.querySelector(".bg");
const body = document.querySelector("body");
const input = document.querySelector("input");
const taskContainer = document.getElementById("taskContainer");

function switchMode() {
        moon.classList.toggle("hide")
        sun.classList.toggle('hide');
        light.classList.toggle('bg');
        body.classList.toggle('dark');
        input.classList.toggle('darkLi');
}
switchMode();
    
    inputBox.addEventListener("keypress", (e) => {
        if(e.key === "Enter" && input.value.length > 0) {
            console.log("adding task");

            let newTask = document.createElement("li");
            let span = document.createElement("span");

            newTask.innerHTML = inputBox.value;
            inputBox.value = '';

            span.classList.add("cross");
            newTask.classList.add("done");
            
            taskContainer.appendChild(newTask);
            newTask.append(span);
            
        } saveData();
    })
        
taskContainer.addEventListener("click", (e) => {
    if(e.target.tagName === 'LI' ) {
        e.target.classList.toggle("check");
        saveData();
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}) 

function saveData() {
    localStorage.setItem('data', taskContainer.innerHTML);
}

function showTask() {
    taskContainer.innerHTML = localStorage.getItem('data');
}
showTask();