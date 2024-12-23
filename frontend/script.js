//tests for functionality of routes

// const { query } = require("express");

// async function todos() {
//     try {
//         const response = await fetch(`http://localhost:3000/todos`);
//         if(!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`)
//         }
//         const data = await response.json();
//         data.forEach((todo, index) => {
//             console.log(`Todo ${index + 1}:`, todo);
//         });
        
//     }catch(error){
//         console.log(error);
//     }
    
    
    
    
// }



// async function insert(){
//     try {
//         const request = new Request("http://localhost:3000/todos", {
//             method: "POST",
//             headers: {"Content-Type" : "application/json"},
//             body: JSON.stringify({title: "nothing to do", completed: false, priority: 4, duedate: "tomorrow"})
//         });
//         const response = await fetch(request);
//         if(!response.ok){
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     }catch (error) {
//         console.log(error);
//     }
// }



// async function ushantbehere(){
//     try{
//         const request = new Request("http://localhost:3000/todos/1", {
//             method:"DELETE"
//         })
//         const response = await fetch(request);
//         if(!response.ok){
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     }catch (error){
//         console.log(error);
//     }
// }

// // todos();

// async function checkcomplete(){
//     try {
//         const request= new Request("http://localhost:3000/todos/13", {
//             method:"PUT",
//             headers: {"Content-Type" : "application/json"},
//             body: JSON.stringify({edit:"completed", value:true})
//         });
//         const response = await fetch(request);
//         if(!response.ok){
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     }catch (error){
//         console.log(error);
//     }
// }


// async function deletecomplete(){
//     try{
//         const request = new Request("http://localhost:3000/todos/", {
//             method:"DELETE"
//         })
//         const response = await fetch(request);
//         if(!response.ok){
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     }catch (error){
//         console.log(error);
//     }
// }


// async function getAllTodos(){
//     try{
//         const response = fetch("http://localhost:3000/todos")
//         if(!response.ok){
//             throw new Error(`HTTP Error: ${response.status}`);
//         }
//         const data = await response.json();
        
//     }catch(error){
//         console.log(error);
//     }
    
// }

function toggleHide(){
    const width = 46 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    
    if(window.innerWidth <= width) {
        const hidebuttonmain = document.querySelector(".main > div:first-of-type > button");
        const sidebar = document.querySelector(".sidebar");
        const sidebarcontent = document.querySelector(".sidebar-content");
        const sidebarhidebutton = document.querySelector(".hide-button");
        const themebutton = document.querySelector(".theme");
        hidebuttonmain.setAttribute("class", '');
        sidebar.classList.toggle('hidden');
        sidebarcontent.classList.toggle("hide");
        sidebarhidebutton.classList.toggle("hide");
        themebutton.classList.toggle("hide");

    }else if(window.innerWidth >= width) {
        const hidebuttonmain = document.querySelector(".main > div:first-of-type > button");
        hidebuttonmain.setAttribute("class", "hide");
        const sidebar = document.querySelector(".sidebar.hidden");
        sidebar.classList.toggle("hidden")
        const sidebarcontent = document.querySelector(".sidebar-content.hide");
        sidebarcontent.classList.toggle("hide");
        const sidebarhidebutton = document.querySelector(".hide-button.hide");
        sidebarhidebutton.classList.toggle("hide");
        const themebutton = document.querySelector(".theme.hide");
        themebutton.classList.toggle("hide");
        const main = document.querySelector('.main');
        main.style.backgroundColor = "white";
    }
    
}


window.addEventListener("resize", toggleHide)
//Frontend only
//to hide sidebar
const hidebuttonmain = document.querySelector(".main > div:first-of-type > button");

const hidebutton = document.querySelector(".hide-button button");
hidebutton.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle('hidden');
    hidebuttonmain.setAttribute("class", "");
    const sidebarcontent = document.querySelector(".sidebar-content");
    sidebarcontent.classList.toggle("hide");
    const sidebarhidebutton = document.querySelector(".hide-button");
    sidebarhidebutton.classList.toggle("hide");
    const themebutton = document.querySelector(".theme")
    themebutton.classList.toggle("hide");
    const main = document.querySelector('.main');
    main.style.backgroundColor = "white"
    
    
})
//to read sidebar
const priobutton = document.querySelector('.add-overlay .category.two');
priobutton.addEventListener('click', () => {
    
    const priocontainer = document.querySelector('.add-overlay .priority-container');
    priocontainer.classList.toggle('hidecontainer');
    const priolevel = document.querySelectorAll('.priority-level');
    priolevel.forEach(element => element.classList.toggle('hide'));
    //REMEMBER HOW CLASSES IN CSS WORKS
})

//



hidebuttonmain.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar.hidden")
    sidebar.setAttribute("class", "sidebar");
    hidebuttonmain.setAttribute("class", "hide");
    const sidebarcontent = document.querySelector(".sidebar-content.hide");
    sidebarcontent.classList.toggle("hide");
    const sidebarhidebutton = document.querySelector(".hide-button.hide");
    sidebarhidebutton.classList.toggle("hide");
    const themebutton = document.querySelector(".theme.hide")
    themebutton.classList.toggle("hide");
    width = 46 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    if(window.innerWidth <= width){
        const main = document.querySelector('.main');
        main.style.backgroundColor = "#bfbfbf"
    }
    
    
})

const overlay = document.querySelector(".search-overlay");
const addTaskButton = document.querySelector(".sidebutton.add");
addTaskButton.addEventListener("click", () =>{
    overlay.classList.add('active');
    
})

overlay.addEventListener('click', (event)=>{
    if(event.target === overlay){
        overlay.classList.remove('active');
    }
})







const inneraddtask = document.querySelector(".add-activity");
inneraddtask.addEventListener('click', () => {
    inneraddtask.classList.toggle("hidebutton");
    const addoverlay = document.querySelector(".add-overlay.hidebutton");
    addoverlay.classList.toggle("hidebutton");


})

const cancel = document.querySelector(".add-overlay > .cancel-enter > button:nth-of-type(1)");
cancel.addEventListener("click", () => {
    const inneraddtask = document.querySelector(".add-activity.hidebutton");
    const addoverlay = document.querySelector(".add-overlay");
    inneraddtask.classList.toggle("hidebutton");
    addoverlay.classList.toggle("hidebutton");
    const priocontainer = document.querySelector('.add-overlay .priority-container');
    priocontainer.classList.add('hidecontainer'); 
    const priolevel = document.querySelectorAll('.add-overlay .priority-level');
    priolevel.forEach(element => element.classList.add('hide')); 
});




// implement outer addtask button




// retrieval of data and displaying

async function insert(title, priority, duedate, description){
    try {
        const request = new Request("http://localhost:3000/todos", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({title: title, completed: false, priority: priority, duedate: duedate, description:description, })
        });
        const response = await fetch(request);
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }catch (error) {
        console.log(error);
    }
}



let priority = 1;
const prioritycontainer = document.querySelector('.add-overlay .priority-container');

prioritycontainer.addEventListener('click', (e) => {
    const button = e.target.closest('.add-overlay .priority-level');
    if (button) { 
        console.log(button);
        console.log(button.classList);
        
        const exclamation = button.textContent.trim(); // Use trimmed text content for comparison
        
        switch (exclamation) {
            case '!':
                priority = 1;
                break;
            case '!!':
                priority = 2;
                break;
            case '!!!':
                priority = 3;
                break;
            case '!!!!':
                priority = 4;
                break;
            default:
                console.log("Unrecognized priority level");
        }
        
        console.log(`Selected priority: ${priority}`);
        console.log(button.parentNode);
        const prioritybutton = document.querySelectorAll('.add-overlay .priority-level');
        prioritybutton.forEach(button => button.style.backgroundColor ="white");
        button.style.backgroundColor = 'beige';
        prioritycontainer.classList.add('hidecontainer');
        priority = 1;

    } else {
        console.log("No priority-level button clicked.");
    }
});

//ADD A TODO


localStorage.clear()
let currentid = localStorage.getItem('counter')
    ? parseInt(localStorage.getItem('counter'),10)
    : 0;

const add = document.querySelector(".add-overlay> .cancel-enter > button:nth-of-type(2)");
const addtaskinput = document.querySelector("#addtaskinput");
addtaskinput.addEventListener('input', () => {
    add.style.backgroundColor = "rgb(223, 74, 74)"
    if(addtaskinput.value === ''){
        add.style.backgroundColor = "rgba(223, 74, 74, 0.418)";
    }
})


add.addEventListener("click", async () => { //async is needed so that await can be used
    currentid += 1;
    localStorage.setItem('counter', currentid);
    const count = `count${currentid}`;
    const addtaskinput = document.querySelector('#addtaskinput');
    const addtaskdescription = document.querySelector('#addtaskdescription');
    const date = document.querySelector('.category > input');
    if(addtaskinput.value === ''){
        return
    }
    else {
        console.log(date.value)
        await insert(addtaskinput.value, priority, date.value, addtaskdescription.value);
        
        const button = 
        `<li class="todo-item ${count}">
            <div class = 'maintodo'>
                        <button class="check ${count}">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                            </svg>
                        </button>
                        <span>${addtaskinput.title}</span>
                        <div class = 'editbutton'><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M249.23-420q-24.75 0-42.37-17.63-17.63-17.62-17.63-42.37 0-24.75 17.63-42.37Q224.48-540 249.23-540q24.75 0 42.38 17.63 17.62 17.62 17.62 42.37 0 24.75-17.62 42.37Q273.98-420 249.23-420ZM480-420q-24.75 0-42.37-17.63Q420-455.25 420-480q0-24.75 17.63-42.37Q455.25-540 480-540q24.75 0 42.37 17.63Q540-504.75 540-480q0 24.75-17.63 42.37Q504.75-420 480-420Zm230.77 0q-24.75 0-42.38-17.63-17.62-17.62-17.62-42.37 0-24.75 17.62-42.37Q686.02-540 710.77-540q24.75 0 42.37 17.63 17.63 17.62 17.63 42.37 0 24.75-17.63 42.37Q735.52-420 710.77-420Z"/></svg></button></div>
                        <div class = 'edit hide'>
                            <ul>
                                <li><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h50.46l409.46-409.46-50.46-50.46L200-250.46V-200Zm-60 60v-135.38l527.62-527.39q9.07-8.24 20.03-12.73 10.97-4.5 23-4.5t23.3 4.27q11.28 4.27 19.97 13.58l48.85 49.46q9.31 8.69 13.27 20 3.96 11.31 3.96 22.62 0 12.07-4.12 23.03-4.12 10.97-13.11 20.04L275.38-140H140Zm620.38-570.15-50.23-50.23 50.23 50.23Zm-126.13 75.9-24.79-25.67 50.46 50.46-25.67-24.79Z"/></svg><span>Edit</span></button></li>
                                
                                <li><span>Due date</span></li>
                                <li class = "dateedit ${count}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#339966"><path d="M360-317.69q-38.54 0-65.42-26.89-26.89-26.88-26.89-65.42 0-38.54 26.89-65.42 26.88-26.89 65.42-26.89 38.54 0 65.42 26.89 26.89 26.88 26.89 65.42 0 38.54-26.89 65.42-26.88 26.89-65.42 26.89ZM212.31-100Q182-100 161-121q-21-21-21-51.31v-535.38Q140-738 161-759q21-21 51.31-21h55.38v-84.61h61.54V-780h303.08v-84.61h60V-780h55.38Q778-780 799-759q21 21 21 51.31v535.38Q820-142 799-121q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-375.38H200v375.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-607.69h560v-100q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v100Zm0 0V-720v112.31Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffcc00"><path d="M450-751.54v-147.69h60v147.69h-60Zm242.92 100.77-41.15-41.15 103.15-106.54 42.54 43.15-104.54 104.54ZM751.54-450v-60h147.69v60H751.54ZM450-60.77v-147.31h60v147.31h-60ZM267.85-652.38 161.54-754.92l43.54-42.16 104.54 104.16-41.77 40.54Zm486.46 490.84L651.77-268.08l40.54-40.15 104.77 101.92-42.77 44.77ZM60.77-450v-60h147.69v60H60.77Zm143.92 288.46-41.77-43.54 103.16-103.15 21.69 20.46 22.08 21.08-105.16 105.15ZM480.09-260q-91.63 0-155.86-64.14Q260-388.28 260-479.91q0-91.63 64.14-155.86Q388.28-700 479.91-700q91.63 0 155.86 64.14Q700-571.72 700-480.09q0 91.63-64.14 155.86Q571.72-260 480.09-260Zm-.09-60q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0099ff"><path d="M100-220v-220q0-22.38 10.62-43.42Q121.23-504.46 140-518v-102q0-41.92 29.04-70.96Q198.08-720 240-720h170q21.85 0 39.15 8.5Q466.46-703 480-688q13.54-15 30.85-23.5 17.3-8.5 39.15-8.5h170q41.92 0 70.96 29.04Q820-661.92 820-620v102q18.77 13.54 29.38 34.58Q860-462.38 860-440v220h-60v-80H160v80h-60Zm410-320h250v-80q0-17-11.5-28.5T720-660H550q-17 0-28.5 11.5T510-620v80Zm-310 0h250v-80q0-17-11.5-28.5T410-660H240q-17 0-28.5 11.5T200-620v80Zm-40 180h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/></svg></button>
                                <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6666ff"><path d="M440-273.85 586.15-420 440-566.15 397.85-524l104 104-104 104L440-273.85ZM172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-415.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v415.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700ZM160-200v-440 440Z"/></svg></button><li>
                                
                                <li><span>Priority</span></li>
                                <li class = "priorityedit ${count}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0066cc"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6600"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button>
                                <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button></li>
                                <li class = "delete ${count}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M292.31-140q-29.92 0-51.12-21.19Q220-182.39 220-212.31V-720h-40v-60h180v-35.38h240V-780h180v60h-40v507.69Q740-182 719-161q-21 21-51.31 21H292.31ZM680-720H280v507.69q0 5.39 3.46 8.85t8.85 3.46h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-720ZM376.16-280h59.99v-360h-59.99v360Zm147.69 0h59.99v-360h-59.99v360ZM280-720v520-520Z"/></svg><span>Delete</span></button></li>
                            </ul>
                    </div>
                    </div>
            <div>${addtaskdescription.value}</div>
            <p>${date.value}</p>
        </li>`
        const ul = document.querySelector(".todo-list");
        ul.insertAdjacentHTML('beforeend', button);
        addtaskinput.value = ''
        addtaskdescription.value = '';
        date.value = '';
        add.style.backgroundColor = "rgba(223, 74, 74, 0.418)"
        console.log(count)
        priority = 1;
        
    }
    ul.innerHTML = '';
    
         await todos().then((data) => {
            data.forEach((todo) => {
                console.log(todo.id);
                console.log(todo.description)
                todo.description = todo.description === undefined? '' : todo.description;
                const button = 
                `<li class="todo-item count${todo.id}">
                    <div class = 'maintodo'>
                        <button class="check count${todo.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                            </svg>
                        </button>
                        <span>${todo.title}</span>
                        <div class = 'editbutton'><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M249.23-420q-24.75 0-42.37-17.63-17.63-17.62-17.63-42.37 0-24.75 17.63-42.37Q224.48-540 249.23-540q24.75 0 42.38 17.63 17.62 17.62 17.62 42.37 0 24.75-17.62 42.37Q273.98-420 249.23-420ZM480-420q-24.75 0-42.37-17.63Q420-455.25 420-480q0-24.75 17.63-42.37Q455.25-540 480-540q24.75 0 42.37 17.63Q540-504.75 540-480q0 24.75-17.63 42.37Q504.75-420 480-420Zm230.77 0q-24.75 0-42.38-17.63-17.62-17.62-17.62-42.37 0-24.75 17.62-42.37Q686.02-540 710.77-540q24.75 0 42.37 17.63 17.63 17.62 17.63 42.37 0 24.75-17.63 42.37Q735.52-420 710.77-420Z"/></svg></button></div>
                        <div class = 'edit hide'>
                            <ul>
                                <li><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h50.46l409.46-409.46-50.46-50.46L200-250.46V-200Zm-60 60v-135.38l527.62-527.39q9.07-8.24 20.03-12.73 10.97-4.5 23-4.5t23.3 4.27q11.28 4.27 19.97 13.58l48.85 49.46q9.31 8.69 13.27 20 3.96 11.31 3.96 22.62 0 12.07-4.12 23.03-4.12 10.97-13.11 20.04L275.38-140H140Zm620.38-570.15-50.23-50.23 50.23 50.23Zm-126.13 75.9-24.79-25.67 50.46 50.46-25.67-24.79Z"/></svg><span>Edit</span></button></li>
                                
                                <li><span>Due date</span></li>
                                <li class = "dateedit count${todo.id}"><button id="one"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#339966"><path d="M360-317.69q-38.54 0-65.42-26.89-26.89-26.88-26.89-65.42 0-38.54 26.89-65.42 26.88-26.89 65.42-26.89 38.54 0 65.42 26.89 26.89 26.88 26.89 65.42 0 38.54-26.89 65.42-26.88 26.89-65.42 26.89ZM212.31-100Q182-100 161-121q-21-21-21-51.31v-535.38Q140-738 161-759q21-21 51.31-21h55.38v-84.61h61.54V-780h303.08v-84.61h60V-780h55.38Q778-780 799-759q21 21 21 51.31v535.38Q820-142 799-121q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-375.38H200v375.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-607.69h560v-100q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v100Zm0 0V-720v112.31Z"/></svg></button><button id="two"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffcc00"><path d="M450-751.54v-147.69h60v147.69h-60Zm242.92 100.77-41.15-41.15 103.15-106.54 42.54 43.15-104.54 104.54ZM751.54-450v-60h147.69v60H751.54ZM450-60.77v-147.31h60v147.31h-60ZM267.85-652.38 161.54-754.92l43.54-42.16 104.54 104.16-41.77 40.54Zm486.46 490.84L651.77-268.08l40.54-40.15 104.77 101.92-42.77 44.77ZM60.77-450v-60h147.69v60H60.77Zm143.92 288.46-41.77-43.54 103.16-103.15 21.69 20.46 22.08 21.08-105.16 105.15ZM480.09-260q-91.63 0-155.86-64.14Q260-388.28 260-479.91q0-91.63 64.14-155.86Q388.28-700 479.91-700q91.63 0 155.86 64.14Q700-571.72 700-480.09q0 91.63-64.14 155.86Q571.72-260 480.09-260Zm-.09-60q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg></button><button id="three"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0099ff"><path d="M100-220v-220q0-22.38 10.62-43.42Q121.23-504.46 140-518v-102q0-41.92 29.04-70.96Q198.08-720 240-720h170q21.85 0 39.15 8.5Q466.46-703 480-688q13.54-15 30.85-23.5 17.3-8.5 39.15-8.5h170q41.92 0 70.96 29.04Q820-661.92 820-620v102q18.77 13.54 29.38 34.58Q860-462.38 860-440v220h-60v-80H160v80h-60Zm410-320h250v-80q0-17-11.5-28.5T720-660H550q-17 0-28.5 11.5T510-620v80Zm-310 0h250v-80q0-17-11.5-28.5T410-660H240q-17 0-28.5 11.5T200-620v80Zm-40 180h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/></svg></button>
                                <button id="four"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6666ff"><path d="M440-273.85 586.15-420 440-566.15 397.85-524l104 104-104 104L440-273.85ZM172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-415.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v415.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700ZM160-200v-440 440Z"/></svg></button><li>
                                
                                <li><span>Priority</span></li>
                                <li class = "priorityedit count${todo.id}"><button id = "one"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button><button id = "two"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0066cc"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button><button id= "three"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6600"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button>
                                <button id= "four"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button></li>
                                <li class = "delete count${todo.id}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M292.31-140q-29.92 0-51.12-21.19Q220-182.39 220-212.31V-720h-40v-60h180v-35.38h240V-780h180v60h-40v507.69Q740-182 719-161q-21 21-51.31 21H292.31ZM680-720H280v507.69q0 5.39 3.46 8.85t8.85 3.46h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-720ZM376.16-280h59.99v-360h-59.99v360Zm147.69 0h59.99v-360h-59.99v360ZM280-720v520-520Z"/></svg><span>Delete</span></button></li>
                            </ul>
                    </div>
                    </div>
                    <div>${todo.description}</div>
                    <p>${todo.duedate}</p>
                </li>`
                
                ul.insertAdjacentHTML('beforeend', button);
                switch(todo.priority){
                    case 1:
                        document.querySelector(`.priorityedit.count${todo.id} > #one`).style.border = "1px solid lightgray"
                        break;
                    case 2:
                        document.querySelector(`.priorityedit.count${todo.id} > #two`).style.border = "1px solid lightgray"
                        break;
                    
                    case 3:
                        document.querySelector(`.priorityedit.count${todo.id} > #three`).style.border = "1px solid lightgray"
                        break;
                    
                    case 4:
                        document.querySelector(`.priorityedit.count${todo.id} > #four`).style.border = "1px solid lightgray"
                        break;
                }
            
            })
        })
        const duedates = document.querySelector('.due-date > div > ul');
        duedates.innerHTML = '';
        
        await getDate().then((data) => {
    
                duedates.innerHTML= ''
                data.forEach((todo) => {
                    console.log(todo.id);
                    console.log(todo.duedate);
                    console.log(todo.description);
                    todo.description = todo.description === undefined? '' : todo.description;
                    const button = 
                    `<li class="todo-item count${todo.id}">
                        <button class="check count${todo.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                            </svg>
                        </button>
                        <span>${todo.title}</span>
                        <div class ='description'>${todo.description}</div>
                        <p>${todo.duedate}</p>
                    </li>`
                    duedates.insertAdjacentHTML('beforeend', button)
                })
                if(uldate.childElementCount === 0){
                    const li = document.createElement("li");
                    const p = document.createElement('p');
                    p.textContent = "No due dates"
                    li.appendChild(p);
                    uldate.appendChild(li);
                        }
            
        }).catch((err) => {
            console.log(err);
        })
})
//LIST ALL EXISTING TODOS

async function todos() {
    try {
        const response = await fetch(`http://localhost:3000/todos`);
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json();
        console.log(data);
        return data
        
    }catch(error){
        console.log(error);
    }
    
    
    
    
}


async function getDate() {
    try {
        const response = await fetch(`http://localhost:3000/todos/date`);
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json();
        
        data.forEach((todo, index) => {
            console.log(`Todo ${index + 1}:`, todo);
        });
        return data;
        
    }catch(error){
        console.log(error);
    }
}
getDate();


document.addEventListener('DOMContentLoaded', () => {
    const ul = document.querySelector('.todo-list');
    todos().then((data) => {
        data.forEach((todo) => {
            console.log(todo.id);
            console.log(todo.duedate);
            console.log(todo.description);
            todo.description = todo.description === undefined? '' : todo.description;
            const button = 
            `<li class="todo-item count${todo.id}">
                <div class = 'maintodo'>
                    <button class="check count${todo.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                        <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                        <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                        </svg>
                    </button>
                    <span>${todo.title}</span>
                    <div class = 'editbutton'><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M249.23-420q-24.75 0-42.37-17.63-17.63-17.62-17.63-42.37 0-24.75 17.63-42.37Q224.48-540 249.23-540q24.75 0 42.38 17.63 17.62 17.62 17.62 42.37 0 24.75-17.62 42.37Q273.98-420 249.23-420ZM480-420q-24.75 0-42.37-17.63Q420-455.25 420-480q0-24.75 17.63-42.37Q455.25-540 480-540q24.75 0 42.37 17.63Q540-504.75 540-480q0 24.75-17.63 42.37Q504.75-420 480-420Zm230.77 0q-24.75 0-42.38-17.63-17.62-17.62-17.62-42.37 0-24.75 17.62-42.37Q686.02-540 710.77-540q24.75 0 42.37 17.63 17.63 17.62 17.63 42.37 0 24.75-17.63 42.37Q735.52-420 710.77-420Z"/></svg></button></div>
                    <div class = 'edit hide'>
                        <ul>
                            <li><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h50.46l409.46-409.46-50.46-50.46L200-250.46V-200Zm-60 60v-135.38l527.62-527.39q9.07-8.24 20.03-12.73 10.97-4.5 23-4.5t23.3 4.27q11.28 4.27 19.97 13.58l48.85 49.46q9.31 8.69 13.27 20 3.96 11.31 3.96 22.62 0 12.07-4.12 23.03-4.12 10.97-13.11 20.04L275.38-140H140Zm620.38-570.15-50.23-50.23 50.23 50.23Zm-126.13 75.9-24.79-25.67 50.46 50.46-25.67-24.79Z"/></svg><span>Edit</span></button></li>
                                
                            <li><span>Due date</span></li>
                            <li class = "dateedit count${todo.id}"><button id="one"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#339966"><path d="M360-317.69q-38.54 0-65.42-26.89-26.89-26.88-26.89-65.42 0-38.54 26.89-65.42 26.88-26.89 65.42-26.89 38.54 0 65.42 26.89 26.89 26.88 26.89 65.42 0 38.54-26.89 65.42-26.88 26.89-65.42 26.89ZM212.31-100Q182-100 161-121q-21-21-21-51.31v-535.38Q140-738 161-759q21-21 51.31-21h55.38v-84.61h61.54V-780h303.08v-84.61h60V-780h55.38Q778-780 799-759q21 21 21 51.31v535.38Q820-142 799-121q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-375.38H200v375.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-607.69h560v-100q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v100Zm0 0V-720v112.31Z"/></svg></button><button id="two"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffcc00"><path d="M450-751.54v-147.69h60v147.69h-60Zm242.92 100.77-41.15-41.15 103.15-106.54 42.54 43.15-104.54 104.54ZM751.54-450v-60h147.69v60H751.54ZM450-60.77v-147.31h60v147.31h-60ZM267.85-652.38 161.54-754.92l43.54-42.16 104.54 104.16-41.77 40.54Zm486.46 490.84L651.77-268.08l40.54-40.15 104.77 101.92-42.77 44.77ZM60.77-450v-60h147.69v60H60.77Zm143.92 288.46-41.77-43.54 103.16-103.15 21.69 20.46 22.08 21.08-105.16 105.15ZM480.09-260q-91.63 0-155.86-64.14Q260-388.28 260-479.91q0-91.63 64.14-155.86Q388.28-700 479.91-700q91.63 0 155.86 64.14Q700-571.72 700-480.09q0 91.63-64.14 155.86Q571.72-260 480.09-260Zm-.09-60q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg></button><button id="three"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0099ff"><path d="M100-220v-220q0-22.38 10.62-43.42Q121.23-504.46 140-518v-102q0-41.92 29.04-70.96Q198.08-720 240-720h170q21.85 0 39.15 8.5Q466.46-703 480-688q13.54-15 30.85-23.5 17.3-8.5 39.15-8.5h170q41.92 0 70.96 29.04Q820-661.92 820-620v102q18.77 13.54 29.38 34.58Q860-462.38 860-440v220h-60v-80H160v80h-60Zm410-320h250v-80q0-17-11.5-28.5T720-660H550q-17 0-28.5 11.5T510-620v80Zm-310 0h250v-80q0-17-11.5-28.5T410-660H240q-17 0-28.5 11.5T200-620v80Zm-40 180h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/></svg></button>
                            <button id="four"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6666ff"><path d="M440-273.85 586.15-420 440-566.15 397.85-524l104 104-104 104L440-273.85ZM172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-415.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v415.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700ZM160-200v-440 440Z"/></svg></button><li>
                                
                            <li><span>Priority</span></li>
                            <li class = "priorityedit count${todo.id}"><button id="one"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button><button id="two"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0066cc"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button><button id ="three"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6600"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button>
                            <button id="four"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button></li>
                            <li class = "delete count${todo.id}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M292.31-140q-29.92 0-51.12-21.19Q220-182.39 220-212.31V-720h-40v-60h180v-35.38h240V-780h180v60h-40v507.69Q740-182 719-161q-21 21-51.31 21H292.31ZM680-720H280v507.69q0 5.39 3.46 8.85t8.85 3.46h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-720ZM376.16-280h59.99v-360h-59.99v360Zm147.69 0h59.99v-360h-59.99v360ZM280-720v520-520Z"/></svg><span>Delete</span></button></li>
                        </ul>
                    </div>
                </div>
                <div>${todo.description}</div>
                <p>${todo.duedate}</p>
            </li>`
            ul.insertAdjacentHTML('beforeend', button);
            switch(todo.priority){
                case 1:
                    document.querySelector(`.priorityedit.count${todo.id} > #one`).style.border = "1px solid lightgray"
                    break;
                case 2:
                    document.querySelector(`.priorityedit.count${todo.id} > #two`).style.border = "1px solid lightgray"
                    break;
                
                case 3:
                    document.querySelector(`.priorityedit.count${todo.id} > #three`).style.border = "1px solid lightgray"
                    break;
                
                case 4:
                    document.querySelector(`.priorityedit.count${todo.id} > #four`).style.border = "1px solid lightgray"
                    break;
            }
            
        })
    }).catch((err) => {
        console.log(err);
    })
    const duedates = document.querySelector('.due-date > div > ul');
    getDate().then((data) => {

            duedates.innerHTML= ''
            data.forEach((todo) => {
                console.log(todo.id);
                console.log(todo.duedate);
                console.log(todo.description);
                todo.description = todo.description === undefined? '' : todo.description;
                const button = 
                `<li class="todo-item count${todo.id}">
                    <button class="check count${todo.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                        <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                        <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                        </svg>
                    </button>
                    <span>${todo.title}</span>
                    <div class ='description'>${todo.description}</div>
                    <p>${todo.duedate}</p>
                </li>`
                duedates.insertAdjacentHTML('beforeend', button)
            })
    if(uldate.childElementCount === 0){
        const li = document.createElement("li");
        const p = document.createElement('p');
        p.textContent = "No due dates"
        li.appendChild(p);
        uldate.appendChild(li);
            }
    }).catch((err) => {
        console.log(err);
    })

    
    
})

//delete todos
async function ushantbehere(id){
    try{
        const request = new Request(`http://localhost:3000/todos/${id}`, {
            method:"DELETE"
        })
        const response = await fetch(request);
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }catch (error){
        console.log(error);
    }
}

const ul = document.querySelector('.todo-list');

ul.addEventListener('click', (e) => {
    if(e.target.closest('.check')) {
        const button = e.target.closest('.check');
        console.log(button);
        console.log(button.classList)
        const buttonstring = button.className;
        console.log([button.classList]);
        const id = buttonstring.slice(11);
        console.log(id);
        console.log(button.parentNode);
        checkcomplete(id);
        ushantbehere(id);
        const sameelement = document.querySelectorAll(`.todo-item.count${id}`);
        sameelement.forEach(element => element.remove());
        


    }
    const uldate = document.querySelector('.due');
    if(uldate.childElementCount === 0){
        const li = document.createElement("li");
        const p = document.createElement('p');
        p.textContent = "No due dates"
        li.appendChild(p);
        uldate.appendChild(li);
    }
    if(e.target.closest('.priorityedit')){
        const prio = e.target.closest('.priorityedit > button');
        
        if(prio){
            const buttonid = prio.id;
            const otherbutton = Array.from(e.target.closest('.priorityedit').querySelectorAll('button')).filter(item => item !== prio);
            otherbutton.forEach(item => item.style.border = 'none');
            console.log(buttonid);
            const clist = Array.from(e.target.closest('.priorityedit').classList);
            const id = clist[1].slice(5)
            switch(buttonid){
                case "one" :
                prio.style.border = "1px solid lightgray"
                editPriority(id, 1)
                break;

                case "two" :
                prio.style.border = "1px solid lightgray"
                editPriority(id, 2)
                break;

                case "three" :
                prio.style.border = "1px solid lightgray"
                editPriority(id, 3)
                break;

                case "four" :
                prio.style.border = "1px solid lightgray"
                editPriority(id, 4)
                break;
                
            }
        }
        
        
        
    }
    if(e.target.closest('.delete')){
        const id = Array.from(e.target.closest('.delete').classList)[1].slice(5);
        console.log(id);
        ushantbehere(id);
        const sameelement = document.querySelectorAll(`.todo-item.count${id}`);
        sameelement.forEach(element => element.remove());
        
    }
    if(e.target.closest('.dateedit')){
        const today = new Date();
        const dates = e.target.closest('.dateedit button')
        console.log(dates)
        console.log(dates.id)
            
            if(dates){
                const buttonid = dates.id;
                const otherbutton = Array.from(e.target.closest('.dateedit').querySelectorAll('button')).filter(item => item !== dates);
                otherbutton.forEach(item => item.style.border = 'none');
                const clist = Array.from(e.target.closest('.dateedit').classList);
                const id = clist[1].slice(5);
                const editeddate = document.querySelectorAll(`.todo-item.count${id} p`)
                console.log(editeddate)
                switch(buttonid){
                    case "one" :
                    dates.style.border = "1px solid lightgray"
                    editDate(id, today.toISOString().split('T')[0]);
                    editeddate.forEach(item => item.textContent = today.toISOString().split('T')[0]);
                    break;
    
                    case "two" :
                    dates.style.border = "1px solid lightgray"
                    const tomorrow = new Date(today);
                    tomorrow.setDate(today.getDate() + 1)
                    editDate(id, tomorrow.toISOString().split('T')[0]);
                    editeddate.forEach(item => item.textContent = tomorrow.toISOString().split('T')[0]);
                    break;
    
                    case "three" :
                    dates.style.border = "1px solid lightgray"
                    editDate(id, null);
                    editeddate.forEach(item => item.textContent = null);
                    break;
    
                    case "four" :
                    dates.style.border = "1px solid lightgray"
                    const nextweek = new Date(today);
                    nextweek.setDate(today.getDate() + 7);
                    editDate(id, nextweek.toISOString().split('T')[0]);
                    editeddate.forEach(item => item.textContent = nextweek.toISOString().split('T')[0]);
                    break;
                    
                }
                 

                
                
            }
        
    }
})

const uldate = document.querySelector('.due');
uldate.addEventListener('click', (e) => {
    if(e.target.closest('.check')) {
        const button = e.target.closest('.check');
        console.log(button);
        console.log(button.classList)
        const buttonstring = button.className;
        console.log([button.classList]);
        const id = buttonstring.slice(11);
        console.log(id);
        console.log(button.parentNode);
        checkcomplete(id);
        ushantbehere(id);
        const sameelement = document.querySelectorAll(`.todo-item.count${id}`);
        sameelement.forEach(element => element.remove());
        if(uldate.childElementCount === 0){
            const li = document.createElement("li");
            const p = document.createElement('p');
            p.textContent = "No due dates"
            li.appendChild(p);
            uldate.appendChild(li);
        }
    }
})



//edit todos




async function checkcomplete(id){
    try {
        const request= new Request(`http://localhost:3000/todos/${id}`, {
            method:"PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({edit:"completed", value:true})
        });
        const response = await fetch(request);
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }catch (error){
        console.log(error);
    }
}

async function editDate(id, date) {
    try{
        const request = new Request(`http://localhost:3000/todos/${id}`, {
            method:"PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({edit:"duedate", value:date})
        });
        const response = await fetch(request);
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

async function editPriority(id, priority) {
    try{
        const request = new Request(`http://localhost:3000/todos/${id}`, {
            method:"PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({edit:"priority", value:priority})
        });
        const response = await fetch(request);
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

//search function
function displaysearch(matches){
    const recentsearch = document.querySelector('.Recently > ul');
    recentsearch.innerHTML = '';
    if(matches.length === 0){
        const li = document.createElement('li');
        const p =  document.createElement('p');
        p.textContent = 'No todos to be searched'
        li.appendChild(p);
        recentsearch.appendChild(li);

    }
    else {
        matches.forEach(todo => {
            const li =  `<li class="todo-item count${todo.id}">
            <button class="check count${todo.id}">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                </svg>
            </button>
            <span>${todo.title}</span>
        </li>`
            recentsearch.insertAdjacentHTML('beforeend', li)
        })
    }
}

const search = document.querySelector('.search > input');
search.addEventListener('input', () =>{
    const query = search.value.toLowerCase();
    const label = document.querySelector('.Recently > div');
    if(query != ''){
        label.style.display = 'none';
        todos().then((todo) => {
            const todotitles = [];
            todo.forEach((todo) => todotitles.push(todo.title));
            const matches = todo.filter(item => item.title.toLowerCase().includes(query));
            displaysearch(matches);
            console.log(matches)
        })
    }
    else{
        label.style.display = 'block'
        const recentsearch = document.querySelector('.Recently > ul');
        recentsearch.innerHTML = '';

    }
})

const searchlist = document.querySelector('.recentsearch');
searchlist.addEventListener('click', () =>{
    
}) 
let opened = false;
document.querySelector('.todo-list').addEventListener('click', (e) => {
    if (e.target.closest('.editbutton > button')) {
        
        console.log(opened)
        // const main = e.target.closest('.editbutton');
        const main = e.target.closest('.maintodo');
        const mainbutton = e.target.closest('.editbutton');
        console.log(main);
        
        if (mainbutton) {
            const alleditmenu = document.querySelectorAll('.edit');
            alleditmenu.forEach(item => item.classList.add('hide'));
            const editmenu = main.querySelector('.edit');
            console.log(editmenu);
            editmenu.classList.toggle('hide');
            editmenu.style.zIndex = '10000';
            opened = !opened
            
        }
        if(!opened){
            main.querySelector('.edit').classList.add('hide');
            
        }
        
        
    }   
});


document.addEventListener('click', function(e) {
    const editMenu = this.documentElement.querySelectorAll('.edit');
    console.log(editMenu);
    const editbutton = e.target.closest('.editbutton');
    console.log(editbutton)

    
    if(!editbutton || !editbutton.contains(e.target)) {
        editMenu.forEach(item => {
            if(item && !item.contains(e.target)){
                item.classList.add('hide');
                opened = false;
            }
        })
    }
})



const backdrop = document.querySelector('.addtask-overlay');
const sidebaraddoverlay = document.querySelector('.sidebaradd-overlay');
const sidebaraddbutton = document.querySelector('.add-Task > .sidebutton');
    
sidebaraddbutton.addEventListener('click', () =>{
    console.log('hi1');
    sidebaraddoverlay.classList.add('active');
    backdrop.classList.add('active');
});

backdrop.addEventListener('click', (e) =>{
    if(e.target === backdrop){
        console.log('hi2');
        sidebaraddoverlay.classList.remove('active');
        backdrop.classList.remove('active');
        const priocontainer = document.querySelector('.sidebaradd-overlay .priority-container');
        priocontainer.classList.add('hidecontainer'); 
        const priolevel = document.querySelectorAll('.sidebaradd-overlay .priority-level');
        priolevel.forEach(element => element.classList.add('hide')); 
    }
        
});

const canceloverlay = document.querySelector('.sidebaradd-overlay > .cancel-enter> button:nth-of-type(1)');
canceloverlay.addEventListener('click', () => {
    sidebaraddoverlay.classList.remove('active');
    backdrop.classList.remove('active');
    const priocontainer = document.querySelector('.sidebaradd-overlay .priority-container');
    priocontainer.classList.add('hidecontainer'); 
    const priolevel = document.querySelectorAll('.sidebaradd-overlay .priority-level');
    priolevel.forEach(element => element.classList.add('hide')); 
    
});
const priobuttonoverlay = document.querySelector('.sidebaradd-overlay .category.two');
priobuttonoverlay.addEventListener('click', () => {
    
    const priocontainer = document.querySelector('.sidebaradd-overlay .priority-container');
    priocontainer.classList.toggle('hidecontainer');
    const priolevel = document.querySelectorAll('.sidebaradd-overlay .priority-level');
    priolevel.forEach(element => element.classList.toggle('hide'));
    //REMEMBER HOW CLASSES IN CSS WORKS
})

const prioritycontaineroverlay = document.querySelector('.sidebaradd-overlay .priority-container');

prioritycontaineroverlay.addEventListener('click', (e) => {
    const button = e.target.closest('.sidebaradd-overlay .priority-level');
    if (button) { 
        console.log(button);
        console.log(button.classList);
        
        const exclamation = button.textContent.trim(); // Use trimmed text content for comparison
        
        switch (exclamation) {
            case '!':
                priority = 1;
                break;
            case '!!':
                priority = 2;
                break;
            case '!!!':
                priority = 3;
                break;
            case '!!!!':
                priority = 4;
                break;
            default:
                console.log("Unrecognized priority level");
        }
        
        console.log(`Selected priority: ${priority}`);
        console.log(button.parentNode);
        const prioritybutton = document.querySelectorAll('.sidebaradd-overlay .priority-level');
        prioritybutton.forEach(button => button.style.backgroundColor ="white");
        button.style.backgroundColor = 'beige';
        prioritycontainer.classList.add('hidecontainer');
        

    } else {
        console.log("No priority-level button clicked.");
    }
});
const addoverlay = document.querySelector(".sidebaradd-overlay > .cancel-enter >button:nth-of-type(2)");
const addtaskinputoverlay = document.querySelector(".sidebaradd-overlay> #addtaskinput");
addtaskinput.addEventListener('input', () => {
    addoverlay.style.backgroundColor = "rgb(223, 74, 74)"
    if(addtaskinput.value === ''){
        addoverlay.style.backgroundColor = "rgba(223, 74, 74, 0.418)";
    }
})
addoverlay.addEventListener("click", async () => { //async is needed so that await can be used
    currentid += 1;
    localStorage.setItem('counter', currentid);
    const count = `count${currentid}`;
    const addtaskinput = document.querySelector('.sidebaradd-overlay >#addtaskinput');
    const addtaskdescription = document.querySelector('.sidebaradd-overlay> #addtaskdescription');
    const date = document.querySelector('.sidebaradd-overlay .category > input');
    if(addtaskinput.value === ''){
        return
    }
    else {
        console.log(date.value)
        await insert(addtaskinput.value, priority, date.value, addtaskdescription.value);
        
        const button = 
        `<li class="todo-item ${count}">
            <div class = 'maintodo'>
                        <button class="check ${count}">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                            </svg>
                        </button>
                        <span>${addtaskinput.title}</span>
                        <div class = 'editbutton'><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M249.23-420q-24.75 0-42.37-17.63-17.63-17.62-17.63-42.37 0-24.75 17.63-42.37Q224.48-540 249.23-540q24.75 0 42.38 17.63 17.62 17.62 17.62 42.37 0 24.75-17.62 42.37Q273.98-420 249.23-420ZM480-420q-24.75 0-42.37-17.63Q420-455.25 420-480q0-24.75 17.63-42.37Q455.25-540 480-540q24.75 0 42.37 17.63Q540-504.75 540-480q0 24.75-17.63 42.37Q504.75-420 480-420Zm230.77 0q-24.75 0-42.38-17.63-17.62-17.62-17.62-42.37 0-24.75 17.62-42.37Q686.02-540 710.77-540q24.75 0 42.37 17.63 17.63 17.62 17.63 42.37 0 24.75-17.63 42.37Q735.52-420 710.77-420Z"/></svg></button></div>
                        <div class = 'edit hide'>
                            <ul>
                                <li><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h50.46l409.46-409.46-50.46-50.46L200-250.46V-200Zm-60 60v-135.38l527.62-527.39q9.07-8.24 20.03-12.73 10.97-4.5 23-4.5t23.3 4.27q11.28 4.27 19.97 13.58l48.85 49.46q9.31 8.69 13.27 20 3.96 11.31 3.96 22.62 0 12.07-4.12 23.03-4.12 10.97-13.11 20.04L275.38-140H140Zm620.38-570.15-50.23-50.23 50.23 50.23Zm-126.13 75.9-24.79-25.67 50.46 50.46-25.67-24.79Z"/></svg><span>Edit</span></button></li>
                                
                                <li><span>Due date</span></li>
                                <li class = "dateedit ${count}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#339966"><path d="M360-317.69q-38.54 0-65.42-26.89-26.89-26.88-26.89-65.42 0-38.54 26.89-65.42 26.88-26.89 65.42-26.89 38.54 0 65.42 26.89 26.89 26.88 26.89 65.42 0 38.54-26.89 65.42-26.88 26.89-65.42 26.89ZM212.31-100Q182-100 161-121q-21-21-21-51.31v-535.38Q140-738 161-759q21-21 51.31-21h55.38v-84.61h61.54V-780h303.08v-84.61h60V-780h55.38Q778-780 799-759q21 21 21 51.31v535.38Q820-142 799-121q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-375.38H200v375.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-607.69h560v-100q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v100Zm0 0V-720v112.31Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffcc00"><path d="M450-751.54v-147.69h60v147.69h-60Zm242.92 100.77-41.15-41.15 103.15-106.54 42.54 43.15-104.54 104.54ZM751.54-450v-60h147.69v60H751.54ZM450-60.77v-147.31h60v147.31h-60ZM267.85-652.38 161.54-754.92l43.54-42.16 104.54 104.16-41.77 40.54Zm486.46 490.84L651.77-268.08l40.54-40.15 104.77 101.92-42.77 44.77ZM60.77-450v-60h147.69v60H60.77Zm143.92 288.46-41.77-43.54 103.16-103.15 21.69 20.46 22.08 21.08-105.16 105.15ZM480.09-260q-91.63 0-155.86-64.14Q260-388.28 260-479.91q0-91.63 64.14-155.86Q388.28-700 479.91-700q91.63 0 155.86 64.14Q700-571.72 700-480.09q0 91.63-64.14 155.86Q571.72-260 480.09-260Zm-.09-60q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0099ff"><path d="M100-220v-220q0-22.38 10.62-43.42Q121.23-504.46 140-518v-102q0-41.92 29.04-70.96Q198.08-720 240-720h170q21.85 0 39.15 8.5Q466.46-703 480-688q13.54-15 30.85-23.5 17.3-8.5 39.15-8.5h170q41.92 0 70.96 29.04Q820-661.92 820-620v102q18.77 13.54 29.38 34.58Q860-462.38 860-440v220h-60v-80H160v80h-60Zm410-320h250v-80q0-17-11.5-28.5T720-660H550q-17 0-28.5 11.5T510-620v80Zm-310 0h250v-80q0-17-11.5-28.5T410-660H240q-17 0-28.5 11.5T200-620v80Zm-40 180h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/></svg></button>
                                <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6666ff"><path d="M440-273.85 586.15-420 440-566.15 397.85-524l104 104-104 104L440-273.85ZM172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-415.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v415.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700ZM160-200v-440 440Z"/></svg></button><li>
                                
                                <li><span>Priority</span></li>
                                <li class = "priorityedit ${count}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0066cc"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6600"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button>
                                <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button></li>
                                <li class = "delete ${count}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M292.31-140q-29.92 0-51.12-21.19Q220-182.39 220-212.31V-720h-40v-60h180v-35.38h240V-780h180v60h-40v507.69Q740-182 719-161q-21 21-51.31 21H292.31ZM680-720H280v507.69q0 5.39 3.46 8.85t8.85 3.46h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-720ZM376.16-280h59.99v-360h-59.99v360Zm147.69 0h59.99v-360h-59.99v360ZM280-720v520-520Z"/></svg><span>Delete</span></button></li>
                            </ul>
                    </div>
                    </div>
            <div>${addtaskdescription.value}</div>
            <p>${date.value}</p>
        </li>`
        const ul = document.querySelector(".todo-list");
        ul.insertAdjacentHTML('beforeend', button);
        addtaskinput.value = ''
        addtaskdescription.value = '';
        date.value = '';
        add.style.backgroundColor = "rgba(223, 74, 74, 0.418)"
        console.log(count)
        sidebaraddoverlay.classList.remove('active');
        backdrop.classList.remove('active');
        priority = 1;
        
        
    }
    ul.innerHTML = '';
    
         await todos().then((data) => {
            data.forEach((todo) => {
                console.log(todo.id);
                console.log(todo.description)
                todo.description = todo.description === undefined? '' : todo.description;
                const button = 
                `<li class="todo-item count${todo.id}">
                    <div class = 'maintodo'>
                        <button class="check count${todo.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                            </svg>
                        </button>
                        <span>${todo.title}</span>
                        <div class = 'editbutton'><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M249.23-420q-24.75 0-42.37-17.63-17.63-17.62-17.63-42.37 0-24.75 17.63-42.37Q224.48-540 249.23-540q24.75 0 42.38 17.63 17.62 17.62 17.62 42.37 0 24.75-17.62 42.37Q273.98-420 249.23-420ZM480-420q-24.75 0-42.37-17.63Q420-455.25 420-480q0-24.75 17.63-42.37Q455.25-540 480-540q24.75 0 42.37 17.63Q540-504.75 540-480q0 24.75-17.63 42.37Q504.75-420 480-420Zm230.77 0q-24.75 0-42.38-17.63-17.62-17.62-17.62-42.37 0-24.75 17.62-42.37Q686.02-540 710.77-540q24.75 0 42.37 17.63 17.63 17.62 17.63 42.37 0 24.75-17.63 42.37Q735.52-420 710.77-420Z"/></svg></button></div>
                        <div class = 'edit hide'>
                            <ul>
                                <li><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h50.46l409.46-409.46-50.46-50.46L200-250.46V-200Zm-60 60v-135.38l527.62-527.39q9.07-8.24 20.03-12.73 10.97-4.5 23-4.5t23.3 4.27q11.28 4.27 19.97 13.58l48.85 49.46q9.31 8.69 13.27 20 3.96 11.31 3.96 22.62 0 12.07-4.12 23.03-4.12 10.97-13.11 20.04L275.38-140H140Zm620.38-570.15-50.23-50.23 50.23 50.23Zm-126.13 75.9-24.79-25.67 50.46 50.46-25.67-24.79Z"/></svg><span>Edit</span></button></li>
                                
                                <li><span>Due date</span></li>
                                <li class = "dateedit count${todo.id}"><button id="one"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#339966"><path d="M360-317.69q-38.54 0-65.42-26.89-26.89-26.88-26.89-65.42 0-38.54 26.89-65.42 26.88-26.89 65.42-26.89 38.54 0 65.42 26.89 26.89 26.88 26.89 65.42 0 38.54-26.89 65.42-26.88 26.89-65.42 26.89ZM212.31-100Q182-100 161-121q-21-21-21-51.31v-535.38Q140-738 161-759q21-21 51.31-21h55.38v-84.61h61.54V-780h303.08v-84.61h60V-780h55.38Q778-780 799-759q21 21 21 51.31v535.38Q820-142 799-121q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-375.38H200v375.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-607.69h560v-100q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v100Zm0 0V-720v112.31Z"/></svg></button><button id="two"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffcc00"><path d="M450-751.54v-147.69h60v147.69h-60Zm242.92 100.77-41.15-41.15 103.15-106.54 42.54 43.15-104.54 104.54ZM751.54-450v-60h147.69v60H751.54ZM450-60.77v-147.31h60v147.31h-60ZM267.85-652.38 161.54-754.92l43.54-42.16 104.54 104.16-41.77 40.54Zm486.46 490.84L651.77-268.08l40.54-40.15 104.77 101.92-42.77 44.77ZM60.77-450v-60h147.69v60H60.77Zm143.92 288.46-41.77-43.54 103.16-103.15 21.69 20.46 22.08 21.08-105.16 105.15ZM480.09-260q-91.63 0-155.86-64.14Q260-388.28 260-479.91q0-91.63 64.14-155.86Q388.28-700 479.91-700q91.63 0 155.86 64.14Q700-571.72 700-480.09q0 91.63-64.14 155.86Q571.72-260 480.09-260Zm-.09-60q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg></button><button id="three"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0099ff"><path d="M100-220v-220q0-22.38 10.62-43.42Q121.23-504.46 140-518v-102q0-41.92 29.04-70.96Q198.08-720 240-720h170q21.85 0 39.15 8.5Q466.46-703 480-688q13.54-15 30.85-23.5 17.3-8.5 39.15-8.5h170q41.92 0 70.96 29.04Q820-661.92 820-620v102q18.77 13.54 29.38 34.58Q860-462.38 860-440v220h-60v-80H160v80h-60Zm410-320h250v-80q0-17-11.5-28.5T720-660H550q-17 0-28.5 11.5T510-620v80Zm-310 0h250v-80q0-17-11.5-28.5T410-660H240q-17 0-28.5 11.5T200-620v80Zm-40 180h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/></svg></button>
                                <button id="four"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6666ff"><path d="M440-273.85 586.15-420 440-566.15 397.85-524l104 104-104 104L440-273.85ZM172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-415.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v415.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700ZM160-200v-440 440Z"/></svg></button><li>
                                
                                <li><span>Priority</span></li>
                                <li class = "priorityedit count${todo.id}"><button id = "one"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button><button id = "two"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0066cc"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button><button id= "three"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6600"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button>
                                <button id= "four"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button></li>
                                <li class = "delete count${todo.id}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M292.31-140q-29.92 0-51.12-21.19Q220-182.39 220-212.31V-720h-40v-60h180v-35.38h240V-780h180v60h-40v507.69Q740-182 719-161q-21 21-51.31 21H292.31ZM680-720H280v507.69q0 5.39 3.46 8.85t8.85 3.46h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-720ZM376.16-280h59.99v-360h-59.99v360Zm147.69 0h59.99v-360h-59.99v360ZM280-720v520-520Z"/></svg><span>Delete</span></button></li>
                            </ul>
                    </div>
                    </div>
                    <div>${todo.description}</div>
                    <p>${todo.duedate}</p>
                </li>`
                
                ul.insertAdjacentHTML('beforeend', button);
                switch(todo.priority){
                    case 1:
                        document.querySelector(`.priorityedit.count${todo.id} > #one`).style.border = "1px solid lightgray"
                        break;
                    case 2:
                        document.querySelector(`.priorityedit.count${todo.id} > #two`).style.border = "1px solid lightgray"
                        break;
                    
                    case 3:
                        document.querySelector(`.priorityedit.count${todo.id} > #three`).style.border = "1px solid lightgray"
                        break;
                    
                    case 4:
                        document.querySelector(`.priorityedit.count${todo.id} > #four`).style.border = "1px solid lightgray"
                        break;
                }
            
            })
        })
        const duedates = document.querySelector('.due-date > div > ul');
        duedates.innerHTML = '';
        
        await getDate().then((data) => {
    
                duedates.innerHTML= ''
                data.forEach((todo) => {
                    console.log(todo.id);
                    console.log(todo.duedate);
                    console.log(todo.description);
                    todo.description = todo.description === undefined? '' : todo.description;
                    const button = 
                    `<li class="todo-item count${todo.id}">
                        <button class="check count${todo.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                            </svg>
                        </button>
                        <span>${todo.title}</span>
                        <div class ='description'>${todo.description}</div>
                        <p>${todo.duedate}</p>
                    </li>`
                    duedates.insertAdjacentHTML('beforeend', button)
                })
                if(uldate.childElementCount === 0){
                    const li = document.createElement("li");
                    const p = document.createElement('p');
                    p.textContent = "No due dates"
                    li.appendChild(p);
                    uldate.appendChild(li);
                        }
            
        }).catch((err) => {
            console.log(err);
        })
})

