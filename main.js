
const toDo = document.getElementById('create');

 
toDo.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        
    const adding = document.createElement('li');
    adding.appendChild(ul);
    adding.classList.add('addList');
    }
    
})

//Define ul or maybe add the classname? 
