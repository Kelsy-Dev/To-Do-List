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
    }
})


const li = document.querySelectorAll('li');

for (let i = 0; i < li.length; i++) {

    li[i].addEventListener("click", () => {
        li[i].classList.toggle('done');
        li[i].classList.toggle('addList')
    })
}

//Implement .done through new tasks





