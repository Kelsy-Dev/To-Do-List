const type = document.querySelector('input');
const toDo = document.getElementById('create');
const ul = document.querySelector('.list');
 
    toDo.addEventListener("keypress", (e) => {
        if(e.key === "Enter" && type.value.length > 0) {
    
        const li = document.createElement('li');
    
        ul.appendChild(li);
        li.appendChild(document.createTextNode(type.value));
        li.classList.add('li');
        type.value = '';

        li.classList.add('cross');
        li.addEventListener("click", () => {
            li.classList.toggle('done');
            li.classList.toggle('addList');
        })
        }  
    })

//Delete this after you are done
const task = document.querySelectorAll('li');
    
    for (let i = 0; i < task.length; i++) {
        
        task[i].classList.add('cross');
        task[i].addEventListener("click", () => {
            task[i].classList.toggle('done');
            task[i].classList.toggle('addList')
        })
    }

const crosscheck = document.querySelector('cross');

crosscheck.addEventListener("click", () => {
    console.log("working");
})






//Implement .done through new tasks





