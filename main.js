const type = document.querySelector('input');
const toDo = document.getElementById('create');

 
toDo.addEventListener("keypress", (e) => {
    if(e.key === "Enter" && type.value.length > 0) {

    const ul = document.querySelector('.list');
    const li = document.createElement('li');

    ul.appendChild(li);
    li.appendChild(document.createTextNode(type.value));
    li.classList.add('addList');
    type.value = '';
    }
    
})
 
