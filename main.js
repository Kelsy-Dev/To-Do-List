const bdy = document.querySelector('body');
const type = document.querySelector('#create');
const toDo = document.getElementById('create');
const tasklist = document.querySelector('.tasklist');
const darkMode = document.querySelector('#icon');
const moon = document.querySelector('.moon');

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
// *********************************
// *********ADDING A NEW TASK*******

toDo.addEventListener("keypress", (e) => {
    if(e.key === "Enter" && type.value.length > 0) {
    
    checkbttn(check);
    crossbttn();
  
    tasklist.appendChild(task);
    task.appendChild(items);
    task.appendChild(cross);
    items.classList.add('items');
    task.classList.add('task');
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

// **************************
// *********DARK MODE********

moon.addEventListener("click", () => {
    const sun = document.createElement('img');
    if(moon) {
        
        items.classList.add('drkbtn');
        cross.classList.add('drkbtn');
        task.classList.add('drkbtn');
        type.classList.add('drkbtn');
        bdy.classList.add('drk');
        check.classList.add('checkdrk');
        darkMode.removeChild(moon);
    
        sun.src = "images/icon-sun.svg";
        darkMode.appendChild(sun);
        sun.classList.add('sun');
        
    } if(sun) { 
        sun.addEventListener("click", () => {

            console.log("turn light");
        })
    } return 
    
})

// Add transitions on sun 
//fix tasks
//optimize/DRY your code