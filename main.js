const bdy = document.querySelector('body');
const type = document.querySelector('#create');
const toDo = document.getElementById('create');
const tasklist = document.querySelector('.tasklist');
const darkMode = document.querySelector('#icon');
const moon = document.querySelector('.moon');

// ***********************
// *********BUTTONS*******

// const checkbttn = (btn) => {
//     btn.classList.add('check');
//     const img = document.createElement('img');
//     img.src = `images/icon-check.svg`
//     task.appendChild(btn);
//     btn.appendChild(img);
// }
// const crossbttn = () => {
//     cross.classList.add('cross');
//     const imgC = document.createElement('img');
//     imgC.src = "images/icon-cross.svg";
//     cross.appendChild(imgC)
// }
// *********************************
// *********ADDING A NEW TASK*******

toDo.addEventListener("keypress", (e) => {
    if(e.key === "Enter" && type.value.length > 0) {

        const task = document.createElement('div');
        const items = document.createElement('input');

    // checkbttn(check);
    const check = document.createElement('button');
    check.classList.add('check');
    const img = document.createElement('img');
    img.src = `images/icon-check.svg`
    task.appendChild(check);
    check.appendChild(img);

    const cross = document.createElement('button');
    cross.classList.add('cross');
    const imgC = document.createElement('img');
    imgC.src = "images/icon-cross.svg";
    cross.appendChild(imgC)
   
    // creating new tasks
    tasklist.appendChild(task);
    task.appendChild(items);
    task.appendChild(cross);
    items.classList.add('items');
    task.classList.add('task');
    items.createTextNode('test');
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

// const vars = [items, cross, task, type]

//     const switchMode = () => {
//         for (let i=0; i<vars.length; i++) {
//         vars[i].classList.add('drkbtn');
        
//         bdy.classList.add('drk');
//         check.classList.add('checkdrk');
//     }
// }

// moon.addEventListener("click", () => {
//     const sun = document.createElement('img');
//     if(moon) {
        
//         switchMode()
//         darkMode.removeChild(moon);
    
//         sun.src = "images/icon-sun.svg";
//         darkMode.appendChild(sun);
//         sun.classList.add('sun');
//         console.log("turn dark");
        
//     } if(sun) { 
//         sun.addEventListener("click", () => {
//             items.classList.remove('drkbtn');
//             cross.classList.remove('drkbtn');
//             task.classList.remove('drkbtn');
//             type.classList.remove('drkbtn');
//             bdy.classList.remove('drk');
//             check.classList.remove('checkdrk');
//             darkMode.removeChild(sun);
//             darkMode.appendChild(moon)

//             console.log("turn light");
//         })
//     } return 
    
// })


//optimize/DRY your code