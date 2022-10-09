const bdy = document.querySelector('body');
const type = document.querySelector('#create');
const toDo = document.getElementById('create');
const tasklist = document.querySelector('.tasklist');
const darkMode = document.querySelector('#icon');

const check = document.createElement('button');
const cross = document.createElement('button');

const task = document.createElement('div');
const items = document.createElement('input');

// ***********************
// *********BUTTONS*******

const checkbttn = (btn) => {
    btn.classList.add('check');
    const img = document.createElement('img');
    img.src = `images/icon-check.svg`
    task.appendChild(btn);
    btn.appendChild(img);
}

const crossbttn = () => {
    cross.classList.add('cross');

    const imgC = document.createElement('img');
    imgC.src = "images/icon-cross.svg";
    cross.appendChild(imgC)
}

toDo.addEventListener("keypress", (e) => {
    if(e.key === "Enter" && type.value.length > 0) {

    task.classList.add('task');
    
    checkbttn(check);
    crossbttn();

    const fuck = type.value;

    items.type = "text";
    items.name = "test";
    items.setAttribute("test", "readonly");
  
    tasklist.appendChild(task);
    task.appendChild(items);
    task.appendChild(cross);
    items.classList.add('items');
    items.innerText = fuck;
    task.classList.add('task');
    // task.classList.add('cross');
    type.value = '';

    check.addEventListener("click", () => {
        items.classList.toggle('done');
        check.classList.toggle('ok');

        console.log("Check button");
    })
    cross.addEventListener("click", () => {
        tasklist.removeChild(task);
        console.log("remove");
    })

    } 
})

darkMode.addEventListener("click", () => {
    items.classList.toggle('drkbtn');
    cross.classList.toggle('drkbtn');
    task.classList.toggle('drkbtn');
    type.classList.toggle('drkbtn');
    bdy.classList.toggle('drk');
    check.classList.toggle('checkdrk');

    console.log('works')
})