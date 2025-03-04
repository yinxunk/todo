import { getTodos, addTodo, updateTodo, getLatestTodoId , getDate, deleteTodo, querySpecificTodo} from "./todos.js"
import {Timestamp} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


const token = localStorage.getItem('uid');
console.log(token);

document.querySelector('.hide-button button:first-of-type').addEventListener('click', () => {
    window.location.replace("login.html"); // user have to relogin after logging out

})
function toggleHide() {
    const width = 46 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    if (window.innerWidth <= width) {
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

    } else if (window.innerWidth >= width) {
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

const hidebutton = document.querySelector(".hide-button button:nth-of-type(2)");
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
    const width = 46 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (window.innerWidth <= width) {
        const main = document.querySelector('.main');
        main.style.backgroundColor = "#bfbfbf"
    }


})

const overlay = document.querySelector(".search-overlay");
const addTaskButton = document.querySelector(".sidebutton.add");
addTaskButton.addEventListener("click", () => {
    overlay.classList.add('active');

})

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
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

// async function insert(title, priority, duedate, description) {
//     try {
//         const request = new Request("http://localhost:3000/todos", {
//             method: "POST",
//             headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
//             body: JSON.stringify({ title: title, completed: false, priority: priority, duedate: duedate, description: description, })
//         });
//         const response = await fetch(request);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }



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
        prioritybutton.forEach(button => button.style.backgroundColor = "white");
        button.style.backgroundColor = 'beige';



    } else {
        console.log("No priority-level button clicked.");
    }
});

//ADD A TODO



const add = document.querySelector(".add-overlay > .cancel-enter > button:nth-of-type(2)");
console.log(add);
const addtaskinput = document.querySelector(".add-overlay #addtaskinput");
addtaskinput.addEventListener('input', () => {
    add.style.backgroundColor = "rgb(223, 74, 74)"
    if (addtaskinput.value === '') {
        add.style.backgroundColor = "rgba(223, 74, 74, 0.418)";
    }
})


add.addEventListener("click", async () => { //async is needed so that await can be used
    const addtaskinput = document.querySelector('.add-overlay #addtaskinput');
    const addtaskdescription = document.querySelector('.add-overlay #addtaskdescription');
    const date = document.querySelector('.add-overlay .category > input');
    console.log(addtaskinput.value);
    console.log(addtaskdescription.value)
    console.log(date.value)
    let duedateinput = date.value
    if (date.value === ''){
        duedateinput = '9999-12-31';
        console.log('true');
    }
    if (addtaskinput.value === '') {
        return
    }
    else {
        console.log(date.value)
        await addTodo(addtaskinput.value, priority, duedateinput, addtaskdescription.value, token);
        const thisId = await getLatestTodoId(token);
        let duedate = date.value;
        if(duedateinput === '9999-12-31'){
            console.log('true');
            duedate = null;
        }
        const button =
            `<li class="todo-item ${thisId}">
            <div class = 'maintodo'>
                        <button class="check ${thisId}">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                            </svg>
                        </button>
                        <span>${addtaskinput.title}</span>
                        <div class = 'editbutton'><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M249.23-420q-24.75 0-42.37-17.63-17.63-17.62-17.63-42.37 0-24.75 17.63-42.37Q224.48-540 249.23-540q24.75 0 42.38 17.63 17.62 17.62 17.62 42.37 0 24.75-17.62 42.37Q273.98-420 249.23-420ZM480-420q-24.75 0-42.37-17.63Q420-455.25 420-480q0-24.75 17.63-42.37Q455.25-540 480-540q24.75 0 42.37 17.63Q540-504.75 540-480q0 24.75-17.63 42.37Q504.75-420 480-420Zm230.77 0q-24.75 0-42.38-17.63-17.62-17.62-17.62-42.37 0-24.75 17.62-42.37Q686.02-540 710.77-540q24.75 0 42.37 17.63 17.63 17.62 17.63 42.37 0 24.75-17.63 42.37Q735.52-420 710.77-420Z"/></svg></button></div>
                        <div class = 'edit hide'>
                            <ul>
                                <li class = "edittab count${thisId}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h50.46l409.46-409.46-50.46-50.46L200-250.46V-200Zm-60 60v-135.38l527.62-527.39q9.07-8.24 20.03-12.73 10.97-4.5 23-4.5t23.3 4.27q11.28 4.27 19.97 13.58l48.85 49.46q9.31 8.69 13.27 20 3.96 11.31 3.96 22.62 0 12.07-4.12 23.03-4.12 10.97-13.11 20.04L275.38-140H140Zm620.38-570.15-50.23-50.23 50.23 50.23Zm-126.13 75.9-24.79-25.67 50.46 50.46-25.67-24.79Z"/></svg><span>Edit</span></button></li>
                                
                                <li><span>Due date</span></li>
                                <li class = "dateedit ${thisId}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#339966"><path d="M360-317.69q-38.54 0-65.42-26.89-26.89-26.88-26.89-65.42 0-38.54 26.89-65.42 26.88-26.89 65.42-26.89 38.54 0 65.42 26.89 26.89 26.88 26.89 65.42 0 38.54-26.89 65.42-26.88 26.89-65.42 26.89ZM212.31-100Q182-100 161-121q-21-21-21-51.31v-535.38Q140-738 161-759q21-21 51.31-21h55.38v-84.61h61.54V-780h303.08v-84.61h60V-780h55.38Q778-780 799-759q21 21 21 51.31v535.38Q820-142 799-121q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-375.38H200v375.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-607.69h560v-100q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v100Zm0 0V-720v112.31Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffcc00"><path d="M450-751.54v-147.69h60v147.69h-60Zm242.92 100.77-41.15-41.15 103.15-106.54 42.54 43.15-104.54 104.54ZM751.54-450v-60h147.69v60H751.54ZM450-60.77v-147.31h60v147.31h-60ZM267.85-652.38 161.54-754.92l43.54-42.16 104.54 104.16-41.77 40.54Zm486.46 490.84L651.77-268.08l40.54-40.15 104.77 101.92-42.77 44.77ZM60.77-450v-60h147.69v60H60.77Zm143.92 288.46-41.77-43.54 103.16-103.15 21.69 20.46 22.08 21.08-105.16 105.15ZM480.09-260q-91.63 0-155.86-64.14Q260-388.28 260-479.91q0-91.63 64.14-155.86Q388.28-700 479.91-700q91.63 0 155.86 64.14Q700-571.72 700-480.09q0 91.63-64.14 155.86Q571.72-260 480.09-260Zm-.09-60q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0099ff"><path d="M100-220v-220q0-22.38 10.62-43.42Q121.23-504.46 140-518v-102q0-41.92 29.04-70.96Q198.08-720 240-720h170q21.85 0 39.15 8.5Q466.46-703 480-688q13.54-15 30.85-23.5 17.3-8.5 39.15-8.5h170q41.92 0 70.96 29.04Q820-661.92 820-620v102q18.77 13.54 29.38 34.58Q860-462.38 860-440v220h-60v-80H160v80h-60Zm410-320h250v-80q0-17-11.5-28.5T720-660H550q-17 0-28.5 11.5T510-620v80Zm-310 0h250v-80q0-17-11.5-28.5T410-660H240q-17 0-28.5 11.5T200-620v80Zm-40 180h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/></svg></button>
                                <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6666ff"><path d="M440-273.85 586.15-420 440-566.15 397.85-524l104 104-104 104L440-273.85ZM172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-415.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v415.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700ZM160-200v-440 440Z"/></svg></button><li>
                                
                                <li><span>Priority</span></li>
                                <li class = "priorityedit ${thisId}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0066cc"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6600"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button>
                                <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button></li>
                                <li class = "delete ${thisId}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M292.31-140q-29.92 0-51.12-21.19Q220-182.39 220-212.31V-720h-40v-60h180v-35.38h240V-780h180v60h-40v507.69Q740-182 719-161q-21 21-51.31 21H292.31ZM680-720H280v507.69q0 5.39 3.46 8.85t8.85 3.46h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-720ZM376.16-280h59.99v-360h-59.99v360Zm147.69 0h59.99v-360h-59.99v360ZM280-720v520-520Z"/></svg><span>Delete</span></button></li>
                            </ul>
                    </div>
                    </div>
            <div id = "description">${addtaskdescription.value}</div>
            <p>${duedate}</p>
        </li>`
        const ul = document.querySelector(".todo-list");
        ul.insertAdjacentHTML('beforeend', button);
        addtaskinput.value = ''
        addtaskdescription.value = '';
        date.value = '';
        add.style.backgroundColor = "rgba(223, 74, 74, 0.418)";
        priority = 1;

    }
    ul.innerHTML = '';

    const todos = await getTodos(token);
    todos.forEach((todo) => {
        let duedate = todo.duedate
        if(todo.duedate === '9999-12-31'){
            duedate = ' ';
        }
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
                                <li class = "edittab count${todo.id}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h50.46l409.46-409.46-50.46-50.46L200-250.46V-200Zm-60 60v-135.38l527.62-527.39q9.07-8.24 20.03-12.73 10.97-4.5 23-4.5t23.3 4.27q11.28 4.27 19.97 13.58l48.85 49.46q9.31 8.69 13.27 20 3.96 11.31 3.96 22.62 0 12.07-4.12 23.03-4.12 10.97-13.11 20.04L275.38-140H140Zm620.38-570.15-50.23-50.23 50.23 50.23Zm-126.13 75.9-24.79-25.67 50.46 50.46-25.67-24.79Z"/></svg><span>Edit</span></button></li>
                                
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
                    <div id = "description">${todo.description || " "}</div>
                    <p>${duedate || " "}</p>
                </li>`

            ul.insertAdjacentHTML('beforeend', button);
            switch (todo.priority) {
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
            const today = new Date();
            const formattedtoday = today.toISOString().split('T')[0];
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const formattedtomorrow = tomorrow.toISOString().split('T')[0]
            const nextweek = new Date();
            nextweek.setDate(nextweek.getDate() + 7);
            const formattednextweek = nextweek.toISOString().split('T')[0]
            const nodate = '9999-12-31';
            switch (todo.duedate){
                case formattedtoday:
                    document.querySelector(`.dateedit.count${todo.id} > #one`).style.border = "1px solid lightgray";
                    break;
                case formattedtomorrow:
                    document.querySelector(`.dateedit.count${todo.id} > #two`).style.border = "1px solid lightgray";
                    break;
                case nodate:
                    document.querySelector(`.dateedit.count${todo.id} > #three`).style.border = "1px solid lightgray";
                    break;
                case formattednextweek:
                    document.querySelector(`.dateedit.count${todo.id} > #four`).style.border = "1px solid lightgray";
                    break;
                }

        
    })
    const duedates = document.querySelector('.due-date > div > ul');
    duedates.innerHTML = '';
    const todoswithdates = await getDate(token);
    todoswithdates.forEach((todo) => {
        let duedate = todo.duedate;
        if(todo.duedate === '9999-12-31'){
            duedate = ' ';
            return;
        }
            const button =
                `<li class="todo-item count${todo.id}">
                        <button class="check count${todo.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                            </svg>
                        </button>
                        <span>${todo.title}</span>
                        <div class ='description'>${todo.description || " "}</div>
                        <p>${duedate || " "}</p>
                    </li>`
            duedates.insertAdjacentHTML('beforeend', button)

    })
    if (uldate.childElementCount === 0) {
        const li = document.createElement("li");
        const p = document.createElement('p');
        p.textContent = "No due dates"
        li.appendChild(p);
        uldate.appendChild(li);
    }
})


document.addEventListener('DOMContentLoaded',  () => {
    const ul = document.querySelector('.todo-list');
    getTodos(token).then((data) => {
        data.forEach((todo) => {
            console.log(todo.id);;
            console.log(todo.userId)
            console.log(todo.description);
            todo.description = todo.description === undefined ? '' : todo.description;
            let duedate = todo.duedate;
            if(todo.duedate === '9999-12-31'){
                console.log('true');
                duedate = ' ';
            }
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
                            <li class = "edittab count${todo.id}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h50.46l409.46-409.46-50.46-50.46L200-250.46V-200Zm-60 60v-135.38l527.62-527.39q9.07-8.24 20.03-12.73 10.97-4.5 23-4.5t23.3 4.27q11.28 4.27 19.97 13.58l48.85 49.46q9.31 8.69 13.27 20 3.96 11.31 3.96 22.62 0 12.07-4.12 23.03-4.12 10.97-13.11 20.04L275.38-140H140Zm620.38-570.15-50.23-50.23 50.23 50.23Zm-126.13 75.9-24.79-25.67 50.46 50.46-25.67-24.79Z"/></svg><span>Edit</span></button></li>
                                
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
                <div id = "description">${todo.description || " "}</div>
                <p>${duedate || " "}</p>
            </li>`
            console.log(todo.duedatestamp)
            
            ul.insertAdjacentHTML('beforeend', button);
            if(todo.duedatestamp.seconds > Timestamp.fromDate(new Date()) && todo.duedate != "9999-12-31"){
                const todoItem = document.querySelector(`.todo-item.count${todo.id} .maintodo`);
                const mainTodo = document.querySelector(`.todo-item.count${todo.id} .maintodo`);
                const todoItemeditbutton = document.querySelector(`.todo-item.count${todo.id} .maintodo .editbutton`);
                if (todoItem && mainTodo) { 
                    if (todo.duedatestamp.seconds > Timestamp.fromDate(new Date()) && todo.duedate != "9999-12-31") {
                        //mainTodo.style.borderLeft = '3px solid rgb(235, 70, 70)';
                        document.querySelector(`.todo-item.count${todo.id} .maintodo .check > svg`).setAttribute("fill", 'red');
                        
                    }
                } else {
                    console.log(`Element .todo-item.count${todo.id} not found.`);
                }
            }
            switch (todo.priority) {
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
            const today = new Date();
            const formattedtoday = today.toISOString().split('T')[0];
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const formattedtomorrow = tomorrow.toISOString().split('T')[0]
            const nextweek = new Date();
            nextweek.setDate(nextweek.getDate() + 7);
            const formattednextweek = nextweek.toISOString().split('T')[0]
            const nodate = '9999-12-31';
            console.log(todo.duedate);
            console.log(formattednextweek)
            switch (todo.duedate){
                case formattedtoday:
                    document.querySelector(`.dateedit.count${todo.id} > #one`).style.border = "1px solid lightgray";
                    break;
                case formattedtomorrow:
                    document.querySelector(`.dateedit.count${todo.id} > #two`).style.border = "1px solid lightgray";
                    break;
                case nodate:
                    document.querySelector(`.dateedit.count${todo.id} > #three`).style.border = "1px solid lightgray";
                    break;
                case formattednextweek:
                    document.querySelector(`.dateedit.count${todo.id} > #four`).style.border = "1px solid lightgray";
                    break;
                }   

        })
    }).catch((err) => {
        console.log(err);
    })
    const duedates = document.querySelector('.due-date > div > ul');
    getDate(token).then((data) => {

        duedates.innerHTML = ''
        data.forEach((todo) => {
            console.log(todo.id);
            console.log(todo.duedate);
            console.log(todo.description);
            todo.description = todo.description === undefined ? '' : todo.description;
            let duedate = todo.duedate
            if(todo.duedate === '9999-12-31'){
                console.log('true');
                duedate = ' ';
                return;
            }
            const button =
                `<li class="todo-item count${todo.id}">
                    <button class="check count${todo.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                        <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                        <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                        </svg>
                    </button>
                    <span>${todo.title}</span>
                    <div class ='description'>${todo.description || " "}</div>
                    <p>${duedate || " "}</p>
                </li>`
            duedates.insertAdjacentHTML('beforeend', button)
        })
        if (uldate.childElementCount === 0) {
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



const ul = document.querySelector('.todo-list');

ul.addEventListener('click', (e) => {
    if (e.target.closest('.check')) {
        const button = e.target.closest('.check');
        console.log(button);
        console.log(button.classList)
        const buttonstring = button.className;
        console.log([button.classList]);
        const id = buttonstring.slice(11);
        console.log(id);
        console.log(button.parentNode);
        updateTodo(token, {completed:true});
        deleteTodo(id);
        const sameelement = document.querySelectorAll(`.todo-item.count${id}`);
        sameelement.forEach(element => element.remove());



    }
    const uldate = document.querySelector('.due');
    if (uldate.childElementCount === 0) {
        const li = document.createElement("li");
        const p = document.createElement('p');
        p.textContent = "No due dates"
        li.appendChild(p);
        uldate.appendChild(li);
    }
    if (e.target.closest('.priorityedit')) {
        const prio = e.target.closest('.priorityedit > button');

        if (prio) {
            const buttonid = prio.id;
            const otherbutton = Array.from(e.target.closest('.priorityedit').querySelectorAll('button')).filter(item => item !== prio);
            otherbutton.forEach(item => item.style.border = 'none');
            console.log(buttonid);
            const clist = Array.from(e.target.closest('.priorityedit').classList);
            const id = clist[1].slice(5)
            switch (buttonid) {
                case "one":
                    prio.style.border = "1px solid lightgray"
                    updateTodo(id, {priority: 1})
                    break;

                case "two":
                    prio.style.border = "1px solid lightgray"
                    updateTodo(id, {priority: 2})
                    break;

                case "three":
                    prio.style.border = "1px solid lightgray"
                    updateTodo(id, {priority: 3})
                    break;

                case "four":
                    prio.style.border = "1px solid lightgray"
                    updateTodo(id, {priority: 4})
                    break;

            }
        }



    }
    if (e.target.closest('.delete')) {
        const id = Array.from(e.target.closest('.delete').classList)[1].slice(5);
        console.log(id);
        deleteTodo(id);
        const sameelement = document.querySelectorAll(`.todo-item.count${id}`);
        sameelement.forEach(element => element.remove());

    }
    if (e.target.closest('.dateedit')) {
        const today = new Date();
        const dates = e.target.closest('.dateedit button')
        console.log(dates)
        console.log(dates.id)

        if (dates) {
            const buttonid = dates.id;
            const otherbutton = Array.from(e.target.closest('.dateedit').querySelectorAll('button')).filter(item => item !== dates);
            otherbutton.forEach(item => item.style.border = 'none');
            const clist = Array.from(e.target.closest('.dateedit').classList);
            const id = clist[1].slice(5);
            const editeddate = document.querySelectorAll(`.todo-item.count${id} p`)
            console.log(editeddate)
            switch (buttonid) {
                case "one":
                    dates.style.border = "1px solid lightgray"
                    updateTodo(id, {duedate: today.toISOString().split('T')[0]});
                    updateTodo(id, {duedatestamp: Timestamp.fromDate(new Date(today.toISOString().split('T')[0]))});
                    document.querySelector(`.todo-item.count${id} p`).textContent = today.toISOString().split('T')[0];
                    if(document.querySelector(`.due .todo-item.count${id}`)){
                        editeddate.forEach(item => item.textContent = today.toISOString().split('T')[0]);
                    }
                    else{
                        const duedates = document.querySelector('.due-date > div > ul');
                        duedates.innerHTML = '';
                        getDate(token).then((data) => {
                            console.log('hi');
                            duedates.innerHTML = ''
                            data.forEach((todo) => {
                                console.log(todo.id);
                                console.log(todo.duedate);
                                console.log(todo.description);
                                todo.description = todo.description === undefined ? '' : todo.description;
                                let duedate = todo.duedate
                                if(todo.duedate === '9999-12-31'){
                                    console.log('true');
                                    duedate = ' ';
                                    return;
                                }
                                const button =
                                    `<li class="todo-item count${todo.id}">
                                        <button class="check count${todo.id}">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                            <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                                            <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                                            </svg>
                                        </button>
                                        <span>${todo.title}</span>
                                        <div class ='description'>${todo.description || " "}</div>
                                        <p>${duedate || " "}</p>
                                    </li>`
                                duedates.insertAdjacentHTML('beforeend', button)
                            })
                            if (uldate.childElementCount === 0) {
                                console.log('hihihhi');
                                const li = document.createElement("li");
                                const p = document.createElement('p');
                                p.textContent = "No due dates"
                                li.appendChild(p);
                                uldate.appendChild(li);
                            }
                        }).catch((err) => {
                            console.log(err);
                        })
                    }
                    break;

                case "two":
                    dates.style.border = "1px solid lightgray"
                    const tomorrow = new Date(today);
                    tomorrow.setDate(today.getDate() + 1)
                    updateTodo(id, {duedate: tomorrow.toISOString().split('T')[0]});
                    updateTodo(id,{duedatestamp: Timestamp.fromDate(new Date(tomorrow.toISOString().split('T')[0]))})
                    document.querySelector(`.todo-item.count${id} p`).textContent = tomorrow.toISOString().split('T')[0];
                    if(document.querySelector(`.due .todo-item.count${id}`)){
                        editeddate.forEach(item => item.textContent = tomorrow.toISOString().split('T')[0]);
                    }
                    else{
                        const duedates = document.querySelector('.due-date > div > ul');
                        duedates.innerHTML = '';
                        getDate(token).then((data) => {
                            console.log('hi');
                            duedates.innerHTML = ''
                            data.forEach((todo) => {
                                console.log(todo.id);
                                console.log(todo.duedate);
                                console.log(todo.description);
                                todo.description = todo.description === undefined ? '' : todo.description;
                                let duedate = todo.duedate
                                if(todo.duedate === '9999-12-31'){
                                    console.log('true');
                                    duedate = ' ';
                                    return;
                                }
                                const button =
                                    `<li class="todo-item count${todo.id}">
                                        <button class="check count${todo.id}">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                            <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                                            <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                                            </svg>
                                        </button>
                                        <span>${todo.title}</span>
                                        <div class ='description'>${todo.description || " "}</div>
                                        <p>${duedate || " "}</p>
                                    </li>`
                                duedates.insertAdjacentHTML('beforeend', button)
                            })
                            if (uldate.childElementCount === 0) {
                                console.log('hihihhi');
                                const li = document.createElement("li");
                                const p = document.createElement('p');
                                p.textContent = "No due dates"
                                li.appendChild(p);
                                uldate.appendChild(li);
                            }
                        }).catch((err) => {
                            console.log(err);
                        })
                    }
                    break;

                case "three":
                    dates.style.border = "1px solid lightgray"
                    updateTodo(id, {duedate: '9999-12-31'});
                    updateTodo(id, {duedatestamp: Timestamp.fromDate(new Date('9999-12-31'))});
                    editeddate.forEach(item => item.textContent = ' ');
                    document.querySelector(`.due .todo-item.count${id}`).remove();
                    break;

                case "four":
                    dates.style.border = "1px solid lightgray"
                    const nextweek = new Date(today);
                    nextweek.setDate(today.getDate() + 7);
                    updateTodo(id, {duedate: nextweek.toISOString().split('T')[0]});
                    updateTodo(id, {duedatestamp: Timestamp.fromDate(new Date(nextweek.toISOString().split('T')[0]))})
                    document.querySelector(`.todo-item.count${id} p`).textContent = nextweek.toISOString().split('T')[0];
                    if(document.querySelector(`.due .todo-item.count${id}`)){
                        editeddate.forEach(item => item.textContent = nextweek.toISOString().split('T')[0]);
                    }
                    else{
                        const duedates = document.querySelector('.due-date > div > ul');
                        duedates.innerHTML = '';
                        getDate(token).then((data) => {
                            console.log('hi');
                            duedates.innerHTML = ''
                            data.forEach((todo) => {
                                console.log(todo.id);
                                console.log(todo.duedate);
                                console.log(todo.description);
                                todo.description = todo.description === undefined ? '' : todo.description;
                                let duedate = todo.duedate
                                if(todo.duedate === '9999-12-31'){
                                    console.log('true');
                                    duedate = ' ';
                                    return;
                                }
                                const button =
                                    `<li class="todo-item count${todo.id}">
                                        <button class="check count${todo.id}">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                            <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                                            <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                                            </svg>
                                        </button>
                                        <span>${todo.title}</span>
                                        <div class ='description'>${todo.description || " "}</div>
                                        <p>${duedate || " "}</p>
                                    </li>`
                                duedates.insertAdjacentHTML('beforeend', button)
                            })
                            if (uldate.childElementCount === 0) {
                                console.log('hihihhi');
                                const li = document.createElement("li");
                                const p = document.createElement('p');
                                p.textContent = "No due dates"
                                li.appendChild(p);
                                uldate.appendChild(li);
                            }
                        }).catch((err) => {
                            console.log(err);
                        })
                    }
                    break;

            }




        }
        

    }
    if(e.target.closest('.edittab')){

        
        const edit = e.target.closest('.edittab button');
        const id = Array.from(e.target.closest('.edittab').classList)[1].slice(5);
        if(edit){
            document.querySelectorAll('.edit').forEach(item => item.classList.add('hide'));
            const editoverlay = document.querySelector('.edit-overlay');
            editoverlay.classList.add('active');
            const editname = document.querySelector('.editname');
            editname.style.textDecoration = "none";
            const editinputtitle = document.querySelector('.editinput > input');
            const editinputdescription = document.querySelector('.editinput input:last-of-type');
            const datecontent = document.querySelector('#duedateedit > span');
            const datesvg = document.querySelector('#duedateedit > svg');
            querySpecificTodo(token, id).then((specifictodo) => {
                console.log("querySpecificTodo")
                console.log(specifictodo)
                console.log(specifictodo.duedate)
                editname.textContent = `${specifictodo.title}`;
                editinputtitle.value = `${specifictodo.title}`;
                editinputtitle.placeholder = `${specifictodo.title}`;
                const duedate = specifictodo.duedate;
                const datelabel = document.querySelector('.dateeditoverlay > div > p');
                datelabel.textContent = duedate
                const duedatefull = new Date(duedate).toDateString();
                console.log(duedatefull)
                const today = getRelativeDate(0);
                const tomorrow = getRelativeDate(1);
                const nextweek = getRelativeDate(7);
                const todayday = today.split(' ')[0]
                const tomorrowday = tomorrow.split(' ')[0]
                const nextweekday = nextweek.split(' ').slice(0, 3).join(' ');
                const nodate = 'Fri Dec 31 9999';
                document.querySelector('.dateeditoverlay button:first-of-type span').textContent = todayday;
                document.querySelector('.dateeditoverlay button:nth-of-type(2) span').textContent = tomorrowday;
                document.querySelector('.dateeditoverlay button:nth-of-type(3) span').textContent = 'zzz';
                document.querySelector('.dateeditoverlay button:last-of-type span').textContent = nextweekday;

                switch (duedatefull) {
                    case today:
                        datecontent.textContent = "Today"
                        datesvg.style.fill = '#339966'
                        datesvg.innerHTML = `<path d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>`;
                        break;
                    case tomorrow:
                        datecontent.textContent = "Tomorrow"
                        datesvg.style.fill = '#ffcc00'
                        datesvg.innerHTML = `<path d="M450-751.54v-147.69h60v147.69h-60Zm242.92 100.77-41.15-41.15 103.15-106.54 42.54 43.15-104.54 104.54ZM751.54-450v-60h147.69v60H751.54ZM450-60.77v-147.31h60v147.31h-60ZM267.85-652.38 161.54-754.92l43.54-42.16 104.54 104.16-41.77 40.54Zm486.46 490.84L651.77-268.08l40.54-40.15 104.77 101.92-42.77 44.77ZM60.77-450v-60h147.69v60H60.77Zm143.92 288.46-41.77-43.54 103.16-103.15 21.69 20.46 22.08 21.08-105.16 105.15ZM480.09-260q-91.63 0-155.86-64.14Q260-388.28 260-479.91q0-91.63 64.14-155.86Q388.28-700 479.91-700q91.63 0 155.86 64.14Q700-571.72 700-480.09q0 91.63-64.14 155.86Q571.72-260 480.09-260Zm-.09-60q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/>`;
                        break;
                    case nextweek:
                        datecontent.textContent = "Next week"
                        datesvg.style.fill = '#6666ff'
                        datesvg.innerHTML = `<path d="M440-273.85 586.15-420 440-566.15 397.85-524l104 104-104 104L440-273.85ZM172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-415.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v415.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700ZM160-200v-440 440Z"/>`;
                        break;
                    case nodate:
                        datecontent.textContent = "ZZZ";
                        datesvg.style.fill = '#0099ff'
                        datesvg.innerHTML = `<path d="M100-220v-220q0-22.38 10.62-43.42Q121.23-504.46 140-518v-102q0-41.92 29.04-70.96Q198.08-720 240-720h170q21.85 0 39.15 8.5Q466.46-703 480-688q13.54-15 30.85-23.5 17.3-8.5 39.15-8.5h170q41.92 0 70.96 29.04Q820-661.92 820-620v102q18.77 13.54 29.38 34.58Q860-462.38 860-440v220h-60v-80H160v80h-60Zm410-320h250v-80q0-17-11.5-28.5T720-660H550q-17 0-28.5 11.5T510-620v80Zm-310 0h250v-80q0-17-11.5-28.5T410-660H240q-17 0-28.5 11.5T200-620v80Zm-40 180h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/>`;
                }
                const priorityedit = document.querySelector('.descriptioneditbutton#priorityeditbutton');
                switch (specifictodo.priority) {
                    case 1:
                        priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P1'
                        break;
                    case 2:
                        priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0066cc"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P2'
                        break;
                    case 3:
                        priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6600"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P3'
                        break;
                    case 4:
                        priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P4'
                        break;

                }
                
                if (specifictodo.description !== '') {
                    editinputdescription.value = `${specifictodo.description}`;
                }
                else {
                    editinputdescription.placeholder = `description`;
                }
            })
            const checkbox = document.querySelector('.checkbox');
            const checkboxedit = document.querySelector('.checkboxedit');
            checkbox.addEventListener('click', function (e) {
                const button = e.target.closest('.checkboxbutton');
                if (button) {
                    console.log('i am a little teapot');
                    updateTodo(id, {completed:true});
                    deleteTodo(id);
                    const sameelement = document.querySelectorAll(`.todo-item.count${id}`);
                    sameelement.forEach(element => element.remove());
                    editname.style.textDecoration = 'line-through';
                    editoverlay.classList.remove('active');
                }
                else {
                    checkbox.classList.add('hide');
                    checkboxedit.classList.add('active');
                }

            })
            const enteredit = document.querySelector('.cancel-enter-edit > button:last-of-type');
            enteredit.addEventListener('click', () => {
                console.log(editinputtitle.value)
                querySpecificTodo(token, id).then((todo) => {
                    if (editinputtitle.value === todo.title && editinputdescription.value === todo.description) {
                        return;
                    }
                    else if (editinputtitle.value !== todo.title) {
                        updateTodo(id, {title:editinputtitle.value});
                        editname.textContent = editinputtitle.value;
                        const todotitledate = document.querySelectorAll(`.todo-item.count${id} > span`);
                        todotitledate.forEach(item => item.textContent = editinputtitle.value);
                        const todotitle = document.querySelectorAll(`.todo-item.count${id} > .maintodo > span`);
                        todotitle.forEach(item => item.textContent = editinputtitle.value);

                    }
                    else if (editinputdescription.value !== todo.description) {
                        updateTodo(id, {description: editinputdescription.value});
                        const tododescriptiondate = document.querySelectorAll(`.todo-item.count${id} .description`);
                        tododescriptiondate.forEach(item => item.textContent = editinputdescription.value);
                        const tododescription = document.querySelectorAll(`.todo-item.count${id} #description`);
                        tododescription.forEach(item => item.textContent = editinputdescription.value)
                    }
                    checkbox.classList.remove('hide');
                    checkboxedit.classList.remove('active');
                })

            })
            const deleteedit = document.querySelector('.deleteedit');
            deleteedit.addEventListener('click', () => {
                updateTodo(id, {complete: true});
                deleteTodo(id);
                const sameelement = document.querySelectorAll(`.todo-item.count${id}`);
                editname.style.textDecoration = 'line-through';
                sameelement.forEach(element => element.remove());
                editoverlay.classList.remove('active');
            })
            // const dateeditoverlaybuttons = document.querySelectorAll('.dateeditoverlay > button');
            // dateeditoverlaybuttons.forEach(item => item.addEventListener('click', () => {
            //     if(item.tex)
            //     updateTodo(id, {duedate: })
            // }))
            const number = ['one', 'two', 'three', 'four'];
            const dateeditoverlaybuttons = document.querySelectorAll('.dateeditoverlay > button');
            dateeditoverlaybuttons.forEach(item => item.addEventListener('click', () => {
                const duedateeditbuttonspan = document.querySelector('.descriptioneditbutton#duedateedit > span');
                let date = '';
                
                let clicked = '';
                if(item.textContent.includes('Today')){
                    const today = new Date();
                    const numberDate = today.toISOString().split('T')[0];
                    date = numberDate;
                    updateTodo(id, {duedate: numberDate});
                    updateTodo(id, {duedatestamp: Timestamp.fromDate(new Date(numberDate))});
                    datesvg.style.fill = '#339966'
                    datesvg.innerHTML = `<path d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>`;
                    duedateeditbuttonspan.textContent = 'Today';
                    clicked = 'one';

                }
                else if(item.textContent.includes('Tomorrow')){
                    const tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1); 
                    date = tomorrow.toISOString().split('T')[0];
                    updateTodo(id, {duedate: tomorrow.toISOString().split('T')[0]});
                    updateTodo(id, {duedatestamp: Timestamp.fromDate(new Date(date))});
                    datesvg.style.fill = '#ffcc00'
                    datesvg.innerHTML = `<path d="M450-751.54v-147.69h60v147.69h-60Zm242.92 100.77-41.15-41.15 103.15-106.54 42.54 43.15-104.54 104.54ZM751.54-450v-60h147.69v60H751.54ZM450-60.77v-147.31h60v147.31h-60ZM267.85-652.38 161.54-754.92l43.54-42.16 104.54 104.16-41.77 40.54Zm486.46 490.84L651.77-268.08l40.54-40.15 104.77 101.92-42.77 44.77ZM60.77-450v-60h147.69v60H60.77Zm143.92 288.46-41.77-43.54 103.16-103.15 21.69 20.46 22.08 21.08-105.16 105.15ZM480.09-260q-91.63 0-155.86-64.14Q260-388.28 260-479.91q0-91.63 64.14-155.86Q388.28-700 479.91-700q91.63 0 155.86 64.14Q700-571.72 700-480.09q0 91.63-64.14 155.86Q571.72-260 480.09-260Zm-.09-60q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/>`;
                    duedateeditbuttonspan.textContent = 'Tomorrow';
                    clicked = 'two';
                }
                else if(item.textContent.includes('No')){
                    updateTodo(id, {duedate: "9999-12-31"});
                    updateTodo(id, {duedatestamp: Timestamp.fromDate(new Date("9999-12-31"))});
                    
                    date = '';
                    datesvg.innerHTML = `<path d="M100-220v-220q0-22.38 10.62-43.42Q121.23-504.46 140-518v-102q0-41.92 29.04-70.96Q198.08-720 240-720h170q21.85 0 39.15 8.5Q466.46-703 480-688q13.54-15 30.85-23.5 17.3-8.5 39.15-8.5h170q41.92 0 70.96 29.04Q820-661.92 820-620v102q18.77 13.54 29.38 34.58Q860-462.38 860-440v220h-60v-80H160v80h-60Zm410-320h250v-80q0-17-11.5-28.5T720-660H550q-17 0-28.5 11.5T510-620v80Zm-310 0h250v-80q0-17-11.5-28.5T410-660H240q-17 0-28.5 11.5T200-620v80Zm-40 180h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/>`;  
                    duedateeditbuttonspan.textContent = 'ZZZ';
                    clicked = 'three';
                }
                else if(item.textContent.includes('Next')){
                    const nextweek = new Date();
                    nextweek.setDate(nextweek.getDate() + 7);
                    date = nextweek.toISOString().split('T')[0];
                    updateTodo(id, {duedate: nextweek.toISOString().split('T')[0]})
                    updateTodo(id, {duedatestamp: Timestamp.fromDate(new Date(date))});
                    datesvg.style.fill = '#6666ff'
                    datesvg.innerHTML = `<path d="M440-273.85 586.15-420 440-566.15 397.85-524l104 104-104 104L440-273.85ZM172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-415.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v415.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700ZM160-200v-440 440Z"/>`;   
                    duedateeditbuttonspan.textContent = 'NextWeek';
                    clicked = 'four';
                }
                for(let i  of number){
                    if(clicked === i){
                        document.querySelector(`.dateedit.count${id} > #${i}`).style.border = "1px solid lightgray";
                    }
                    else{
                        document.querySelector(`.dateedit.count${id} > #${i}`).style.border = "none";
                    }
                }
                
            }))

            const priorityeditoverlaybuttons = document.querySelectorAll('.priorityeditoverlay > button');
            console.log(priorityeditoverlaybuttons);
            priorityeditoverlaybuttons.forEach(item => item.addEventListener('click', () => {
                updateTodo(id, {priority: Number(item.textContent[9])});
                console.log(typeof(item.textContent[9]));
                const priorityedit = document.querySelector('.descriptioneditbutton#priorityeditbutton');
                let clicked = '';
                switch(item.textContent[9]){
                    case '1':
                        priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P1'
                        clicked = 'one';
                        break;
                    case '2':
                        priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0066cc"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P2'
                        clicked = 'two';
                        break;
                    case '3':
                        priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6600"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P3'
                        clicked = 'three';
                        break;
                    case '4':
                        priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P4'
                        clicked = 'four';
                        break;

                }
                for(let i of number){
                    if(i === clicked){
                        document.querySelector(`.priorityedit.count${id} > #${i}`).style.border = "1px solid lightgray";
                    }
                    else{
                        document.querySelector(`.priorityedit.count${id} > #${i}`).style.border = "none";
                    }
                }
                
                
            }))
        }
        
        

    }
})

const uldate = document.querySelector('.due');
uldate.addEventListener('click', (e) => {
    if (e.target.closest('.check')) {
        const button = e.target.closest('.check');
        console.log(button);
        console.log(button.classList)
        const buttonstring = button.className;
        console.log([button.classList]);
        const id = buttonstring.slice(11);
        console.log(id);
        console.log(button.parentNode);
        updateTodo(id, {completed:true});
        deleteTodo(id);
        const sameelement = document.querySelectorAll(`.todo-item.count${id}`);
        sameelement.forEach(element => element.remove());
        if (uldate.childElementCount === 0) {
            const li = document.createElement("li");
            const p = document.createElement('p');
            p.textContent = "No due dates"
            li.appendChild(p);
            uldate.appendChild(li);
        }
    }
})



//search function
function displaysearch(matches) {
    const recentsearch = document.querySelector('.Recently > ul');
    recentsearch.innerHTML = '';
    if (matches.length === 0) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = 'No todos to be searched'
        li.appendChild(p);
        recentsearch.appendChild(li);

    }
    else {
        matches.forEach(todo => {
            const li = `<li class="todo-item count${todo.id}">
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
search.addEventListener('input', () => {
    const query = search.value.toLowerCase();
    const label = document.querySelector('.Recently > div');
    if (query != '') {
        label.style.display = 'none';
        getTodos(token).then((todo) => {
            const todotitles = [];
            todo.forEach((todo) => todotitles.push(todo.title));
            const matches = todo.filter(item => item.title.toLowerCase().includes(query));
            displaysearch(matches);
            console.log(matches)
        })
    }
    else {
        label.style.display = 'block'
        const recentsearch = document.querySelector('.Recently > ul');
        recentsearch.innerHTML = '';

    }
})

const searchlist = document.querySelector('.recentsearch');
searchlist.addEventListener('click', () => {

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
        if (!opened) {
            main.querySelector('.edit').classList.add('hide');

        }


    }
});


document.addEventListener('click', function (e) {
    const editMenu = this.documentElement.querySelectorAll('.edit');
    console.log(editMenu);
    const editbutton = e.target.closest('.editbutton');
    console.log(editbutton)


    if (!editbutton || !editbutton.contains(e.target)) {
        editMenu.forEach(item => {
            if (item && !item.contains(e.target)) {
                item.classList.add('hide');
                opened = false;
            }
        })
    }
})



const backdrop = document.querySelector('.addtask-overlay');
const sidebaraddoverlay = document.querySelector('.sidebaradd-overlay');
const sidebaraddbutton = document.querySelector('.add-Task > .sidebutton');

sidebaraddbutton.addEventListener('click', () => {
    console.log('hi1');
    sidebaraddoverlay.classList.add('active');
    backdrop.classList.add('active');
});

backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
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
        prioritybutton.forEach(button => button.style.backgroundColor = "white");
        button.style.backgroundColor = 'beige';
        prioritycontainer.classList.add('hidecontainer');


    } else {
        console.log("No priority-level button clicked.");
    }
});
const addoverlay = document.querySelector(".sidebaradd-overlay > .cancel-enter >button:nth-of-type(2)");
const addtaskinputoverlay = document.querySelector(".sidebaradd-overlay> #addtaskinput");
addtaskinputoverlay.addEventListener('input', () => {
    addoverlay.style.backgroundColor = "rgb(223, 74, 74)"
    if (addtaskinputoverlay.value === '') {
        addoverlay.style.backgroundColor = "rgba(223, 74, 74, 0.418)";
    }
})
addoverlay.addEventListener("click", async () => { //async is needed so that await can be used
   
    const addtaskinput = document.querySelector('.sidebaradd-overlay >#addtaskinput');
    const addtaskdescription = document.querySelector('.sidebaradd-overlay> #addtaskdescription');
    const date = document.querySelector('.sidebaradd-overlay .category > input');
    let duedateinput = date.value
    if(date.value === ''){
        duedateinput = '9999-12-31';
        console.log('true');
    }
    if (addtaskinput.value === '') {
        return
    }
    else {
        console.log(date.value)
        await addTodo(addtaskinput.value, priority, date.value, addtaskdescription.value, token);
        let duedate = date.value;
        if(duedateinput === '9999-12-31'){
            console.log('true');
            duedate = null;
        }
        const thisId = await getLatestTodoId(token);
        const button =
            `<li class="todo-item ${thisId}">
            <div class = 'maintodo'>
                        <button class="check ${thisId}">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                            </svg>
                        </button>
                        <span>${addtaskinput.title}</span>
                        <div class = 'editbutton'><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M249.23-420q-24.75 0-42.37-17.63-17.63-17.62-17.63-42.37 0-24.75 17.63-42.37Q224.48-540 249.23-540q24.75 0 42.38 17.63 17.62 17.62 17.62 42.37 0 24.75-17.62 42.37Q273.98-420 249.23-420ZM480-420q-24.75 0-42.37-17.63Q420-455.25 420-480q0-24.75 17.63-42.37Q455.25-540 480-540q24.75 0 42.37 17.63Q540-504.75 540-480q0 24.75-17.63 42.37Q504.75-420 480-420Zm230.77 0q-24.75 0-42.38-17.63-17.62-17.62-17.62-42.37 0-24.75 17.62-42.37Q686.02-540 710.77-540q24.75 0 42.37 17.63 17.63 17.62 17.63 42.37 0 24.75-17.63 42.37Q735.52-420 710.77-420Z"/></svg></button></div>
                        <div class = 'edit hide'>
                            <ul>
                                <li class = "edittab count${thisId}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h50.46l409.46-409.46-50.46-50.46L200-250.46V-200Zm-60 60v-135.38l527.62-527.39q9.07-8.24 20.03-12.73 10.97-4.5 23-4.5t23.3 4.27q11.28 4.27 19.97 13.58l48.85 49.46q9.31 8.69 13.27 20 3.96 11.31 3.96 22.62 0 12.07-4.12 23.03-4.12 10.97-13.11 20.04L275.38-140H140Zm620.38-570.15-50.23-50.23 50.23 50.23Zm-126.13 75.9-24.79-25.67 50.46 50.46-25.67-24.79Z"/></svg><span>Edit</span></button></li>
                                
                                <li><span>Due date</span></li>
                                <li class = "dateedit ${thisId}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#339966"><path d="M360-317.69q-38.54 0-65.42-26.89-26.89-26.88-26.89-65.42 0-38.54 26.89-65.42 26.88-26.89 65.42-26.89 38.54 0 65.42 26.89 26.89 26.88 26.89 65.42 0 38.54-26.89 65.42-26.88 26.89-65.42 26.89ZM212.31-100Q182-100 161-121q-21-21-21-51.31v-535.38Q140-738 161-759q21-21 51.31-21h55.38v-84.61h61.54V-780h303.08v-84.61h60V-780h55.38Q778-780 799-759q21 21 21 51.31v535.38Q820-142 799-121q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-375.38H200v375.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-607.69h560v-100q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v100Zm0 0V-720v112.31Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffcc00"><path d="M450-751.54v-147.69h60v147.69h-60Zm242.92 100.77-41.15-41.15 103.15-106.54 42.54 43.15-104.54 104.54ZM751.54-450v-60h147.69v60H751.54ZM450-60.77v-147.31h60v147.31h-60ZM267.85-652.38 161.54-754.92l43.54-42.16 104.54 104.16-41.77 40.54Zm486.46 490.84L651.77-268.08l40.54-40.15 104.77 101.92-42.77 44.77ZM60.77-450v-60h147.69v60H60.77Zm143.92 288.46-41.77-43.54 103.16-103.15 21.69 20.46 22.08 21.08-105.16 105.15ZM480.09-260q-91.63 0-155.86-64.14Q260-388.28 260-479.91q0-91.63 64.14-155.86Q388.28-700 479.91-700q91.63 0 155.86 64.14Q700-571.72 700-480.09q0 91.63-64.14 155.86Q571.72-260 480.09-260Zm-.09-60q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0099ff"><path d="M100-220v-220q0-22.38 10.62-43.42Q121.23-504.46 140-518v-102q0-41.92 29.04-70.96Q198.08-720 240-720h170q21.85 0 39.15 8.5Q466.46-703 480-688q13.54-15 30.85-23.5 17.3-8.5 39.15-8.5h170q41.92 0 70.96 29.04Q820-661.92 820-620v102q18.77 13.54 29.38 34.58Q860-462.38 860-440v220h-60v-80H160v80h-60Zm410-320h250v-80q0-17-11.5-28.5T720-660H550q-17 0-28.5 11.5T510-620v80Zm-310 0h250v-80q0-17-11.5-28.5T410-660H240q-17 0-28.5 11.5T200-620v80Zm-40 180h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/></svg></button>
                                <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6666ff"><path d="M440-273.85 586.15-420 440-566.15 397.85-524l104 104-104 104L440-273.85ZM172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-415.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v415.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700ZM160-200v-440 440Z"/></svg></button><li>
                                
                                <li><span>Priority</span></li>
                                <li class = "priorityedit ${thisId}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0066cc"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6600"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button>
                                <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg></button></li>
                                <li class = "delete ${thisId}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M292.31-140q-29.92 0-51.12-21.19Q220-182.39 220-212.31V-720h-40v-60h180v-35.38h240V-780h180v60h-40v507.69Q740-182 719-161q-21 21-51.31 21H292.31ZM680-720H280v507.69q0 5.39 3.46 8.85t8.85 3.46h375.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46V-720ZM376.16-280h59.99v-360h-59.99v360Zm147.69 0h59.99v-360h-59.99v360ZM280-720v520-520Z"/></svg><span>Delete</span></button></li>
                            </ul>
                    </div>
                    </div>
            <div id = "description">${addtaskdescription.value}</div>
            <p>${duedate}</p>
        </li>`
        const ul = document.querySelector(".todo-list");
        ul.insertAdjacentHTML('beforeend', button);
        addtaskinput.value = ''
        addtaskdescription.value = '';
        date.value = '';
        addoverlay.style.backgroundColor = "rgba(223, 74, 74, 0.418)"
        console.log(thisId)
        sidebaraddoverlay.classList.remove('active');
        backdrop.classList.remove('active');
        priority = 1;


    }
    ul.innerHTML = '';

    await getTodos(token).then((data) => {
        data.forEach((todo) => {
            console.log(todo.id);
            console.log(todo.description)
            todo.description = todo.description === undefined ? '' : todo.description;
            let duedate = todo.duedate;
            if(todo.duedate === '9999-12-31'){
                console.log('true');
                duedate = ' ';
            }
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
                                <li class = "edittab count${todo.id}"><button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h50.46l409.46-409.46-50.46-50.46L200-250.46V-200Zm-60 60v-135.38l527.62-527.39q9.07-8.24 20.03-12.73 10.97-4.5 23-4.5t23.3 4.27q11.28 4.27 19.97 13.58l48.85 49.46q9.31 8.69 13.27 20 3.96 11.31 3.96 22.62 0 12.07-4.12 23.03-4.12 10.97-13.11 20.04L275.38-140H140Zm620.38-570.15-50.23-50.23 50.23 50.23Zm-126.13 75.9-24.79-25.67 50.46 50.46-25.67-24.79Z"/></svg><span>Edit</span></button></li>
                                
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
                    <div id = "description">${todo.description || " "}</div>
                    <p>${duedate || " "}</p>
                </li>`

            ul.insertAdjacentHTML('beforeend', button);
            switch (todo.priority) {
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
            const today = new Date();
            const formattedtoday = today.toISOString().split('T')[0];
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const formattedtomorrow = tomorrow.toISOString().split('T')[0]
            const nextweek = new Date();
            nextweek.setDate(nextweek.getDate() + 7);
            const formattednextweek = nextweek.toISOString().split('T')[0]
            const nodate = '9999-12-31';
            console.log(todo.duedate);
            switch (todo.duedate){
                case formattedtoday:
                    document.querySelector(`.dateedit.count${todo.id} > #one`).style.border = "1px solid lightgray";
                    break;
                case formattedtomorrow:
                    document.querySelector(`.dateedit.count${todo.id} > #two`).style.border = "1px solid lightgray";
                    break;
                case nodate:
                    document.querySelector(`.dateedit.count${todo.id} > #three`).style.border = "1px solid lightgray";
                    break;
                case formattednextweek:
                    document.querySelector(`.dateedit.count${todo.id} > #four`).style.border = "1px solid lightgray";
                    break;
                }

        })
    })
    const duedates = document.querySelector('.due-date > div > ul');
    duedates.innerHTML = '';

    await getDate(token).then((data) => {

        duedates.innerHTML = ''
        data.forEach((todo) => {
            console.log(todo.id);
            console.log(todo.duedate);
            console.log(todo.description);
            todo.description = todo.description === undefined ? '' : todo.description;
            let duedate = todo.duedate;
            if(todo.duedate === '9999-12-31'){
                console.log('true');
                duedate = ' ';
                return;
            }
            const button =
                `<li class="todo-item count${todo.id}">
                        <button class="check count${todo.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                            </svg>
                        </button>
                        <span>${todo.title}</span>
                        <div class ='description'>${todo.description || " "}</div>
                        <p>${duedate || " "}</p>
                    </li>`
            duedates.insertAdjacentHTML('beforeend', button)
        })
        if (uldate.childElementCount === 0) {
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


const checkboxbutton = document.querySelector('.checkboxbutton');
checkboxbutton.addEventListener('click', () => {
    console.log('Iamalittleteapot')
})
const checkbox = document.querySelector('.checkbox');
const checkboxedit = document.querySelector('.checkboxedit');
const canceledit = document.querySelector('.cancel-enter-edit > button');
canceledit.addEventListener('click', function () {
    checkbox.classList.remove('hide');
    checkboxedit.classList.remove('active');
})


const recentsearch = document.querySelector('.recentsearch');
recentsearch.addEventListener('click', (e) => {
    const todoitem = e.target.closest('.todo-item');
    if (todoitem) {
        
        const todoitemstring = todoitem.className;
        const id = todoitemstring.slice(15);
        console.log(id);
        const searchoverlay = document.querySelector('.search-overlay');
        searchoverlay.classList.remove('active');
        const editoverlay = document.querySelector('.edit-overlay');
        const searchinput = document.querySelector('.search > input');
        searchinput.value = '';
        editoverlay.classList.add('active');
        const editname = document.querySelector('.editname');
        editname.style.textDecoration = "none";
        const editinputtitle = document.querySelector('.editinput > input');
        const editinputdescription = document.querySelector('.editinput input:last-of-type');
        const datecontent = document.querySelector('#duedateedit > span');
        const datesvg = document.querySelector('#duedateedit > svg');
        querySpecificTodo(token, id).then((specifictodo) => {
            console.log("querySpecificTodo")
            console.log(specifictodo)
            console.log(specifictodo.duedate)
            editname.textContent = `${specifictodo.title}`;
            editinputtitle.value = `${specifictodo.title}`;
            editinputtitle.placeholder = `${specifictodo.title}`;
            const duedate = specifictodo.duedate;
            const datelabel = document.querySelector('.dateeditoverlay > div > p');
            datelabel.textContent = duedate
            const duedatefull = new Date(duedate).toDateString();
            console.log(duedatefull)
            const today = getRelativeDate(0);
            const tomorrow = getRelativeDate(1);
            const nextweek = getRelativeDate(7);
            const todayday = today.split(' ')[0]
            const tomorrowday = tomorrow.split(' ')[0]
            const nextweekday = nextweek.split(' ').slice(0, 3).join(' ');
            const nodate = 'Fri Dec 31 9999';
            document.querySelector('.dateeditoverlay button:first-of-type span').textContent = todayday;
            document.querySelector('.dateeditoverlay button:nth-of-type(2) span').textContent = tomorrowday;
            document.querySelector('.dateeditoverlay button:nth-of-type(3) span').textContent = 'zzz';
            document.querySelector('.dateeditoverlay button:last-of-type span').textContent = nextweekday;

            switch (duedatefull) {
                case today:
                    datecontent.textContent = "Today"
                    datesvg.style.fill = '#339966'
                    datesvg.innerHTML = `<path d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>`;
                    break;
                case tomorrow:
                    datecontent.textContent = "Tomorrow"
                    datesvg.style.fill = '#ffcc00'
                    datesvg.innerHTML = `<path d="M450-751.54v-147.69h60v147.69h-60Zm242.92 100.77-41.15-41.15 103.15-106.54 42.54 43.15-104.54 104.54ZM751.54-450v-60h147.69v60H751.54ZM450-60.77v-147.31h60v147.31h-60ZM267.85-652.38 161.54-754.92l43.54-42.16 104.54 104.16-41.77 40.54Zm486.46 490.84L651.77-268.08l40.54-40.15 104.77 101.92-42.77 44.77ZM60.77-450v-60h147.69v60H60.77Zm143.92 288.46-41.77-43.54 103.16-103.15 21.69 20.46 22.08 21.08-105.16 105.15ZM480.09-260q-91.63 0-155.86-64.14Q260-388.28 260-479.91q0-91.63 64.14-155.86Q388.28-700 479.91-700q91.63 0 155.86 64.14Q700-571.72 700-480.09q0 91.63-64.14 155.86Q571.72-260 480.09-260Zm-.09-60q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/>`;
                    break;
                case nextweek:
                    datecontent.textContent = "Next week"
                    datesvg.style.fill = '#6666ff'
                    datesvg.innerHTML = `<path d="M440-273.85 586.15-420 440-566.15 397.85-524l104 104-104 104L440-273.85ZM172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-415.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v415.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700ZM160-200v-440 440Z"/>`;
                    break;
                case nodate:
                    datecontent.textContent = "ZZZ";
                    datesvg.style.fill = '#0099ff'
                    datesvg.innerHTML = `<path d="M100-220v-220q0-22.38 10.62-43.42Q121.23-504.46 140-518v-102q0-41.92 29.04-70.96Q198.08-720 240-720h170q21.85 0 39.15 8.5Q466.46-703 480-688q13.54-15 30.85-23.5 17.3-8.5 39.15-8.5h170q41.92 0 70.96 29.04Q820-661.92 820-620v102q18.77 13.54 29.38 34.58Q860-462.38 860-440v220h-60v-80H160v80h-60Zm410-320h250v-80q0-17-11.5-28.5T720-660H550q-17 0-28.5 11.5T510-620v80Zm-310 0h250v-80q0-17-11.5-28.5T410-660H240q-17 0-28.5 11.5T200-620v80Zm-40 180h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/>`;
            }
            const priorityedit = document.querySelector('.descriptioneditbutton#priorityeditbutton');
            switch (specifictodo.priority) {
                case 1:
                    priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P1'
                    break;
                case 2:
                    priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0066cc"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P2'
                    break;
                case 3:
                    priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6600"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P3'
                    break;
                case 4:
                    priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P4'
                    break;

            }
            
            if (specifictodo.description !== '') {
                editinputdescription.value = `${specifictodo.description}`;
            }
            else {
                editinputdescription.placeholder = `description`;
            }
        })
        const checkbox = document.querySelector('.checkbox');
        const checkboxedit = document.querySelector('.checkboxedit');
        checkbox.addEventListener('click', function (e) {
            const button = e.target.closest('.checkboxbutton');
            if (button) {
                console.log('i am a little teapot');
                updateTodo(id, {completed:true});
                deleteTodo(id);
                const sameelement = document.querySelectorAll(`.todo-item.count${id}`);
                sameelement.forEach(element => element.remove());
                editname.style.textDecoration = 'line-through';
                editoverlay.classList.remove('active');
            }
            else {
                checkbox.classList.add('hide');
                checkboxedit.classList.add('active');
            }

        })
        const enteredit = document.querySelector('.cancel-enter-edit > button:last-of-type');
        enteredit.addEventListener('click', () => {
            console.log(editinputtitle.value)
            querySpecificTodo(token, id).then((todo) => {
                if (editinputtitle.value === todo.title && editinputdescription.value === todo.description) {
                    return;
                }
                else if (editinputtitle.value !== todo.title) {
                    updateTodo(id, {title:editinputtitle.value});
                    editname.textContent = editinputtitle.value;
                    const todotitledate = document.querySelectorAll(`.todo-item.count${id} > span`);
                    todotitledate.forEach(item => item.textContent = editinputtitle.value);
                    const todotitle = document.querySelectorAll(`.todo-item.count${id} > .maintodo > span`);
                    todotitle.forEach(item => item.textContent = editinputtitle.value);

                }
                else if (editinputdescription.value !== todo.description) {
                    updateTodo(id, {description: editinputdescription.value});
                    const tododescriptiondate = document.querySelectorAll(`.todo-item.count${id} .description`);
                    tododescriptiondate.forEach(item => item.textContent = editinputdescription.value);
                    const tododescription = document.querySelectorAll(`.todo-item.count${id} #description`);
                    tododescription.forEach(item => item.textContent = editinputdescription.value)
                }
                checkbox.classList.remove('hide');
                checkboxedit.classList.remove('active');
            })

        })
        const deleteedit = document.querySelector('.deleteedit');
        deleteedit.addEventListener('click', () => {
            updateTodo(id, {complete: true});
            deleteTodo(id);
            const sameelement = document.querySelectorAll(`.todo-item.count${id}`);
            editname.style.textDecoration = 'line-through';
            sameelement.forEach(element => element.remove());
            editoverlay.classList.remove('active');
        })
        // const dateeditoverlaybuttons = document.querySelectorAll('.dateeditoverlay > button');
        // dateeditoverlaybuttons.forEach(item => item.addEventListener('click', () => {
        //     if(item.tex)
        //     updateTodo(id, {duedate: })
        // }))
        const number = ['one', 'two', 'three', 'four'];
        const dateeditoverlaybuttons = document.querySelectorAll('.dateeditoverlay > button');
        dateeditoverlaybuttons.forEach(item => item.addEventListener('click', () => {
            const duedateeditbuttonspan = document.querySelector('.descriptioneditbutton#duedateedit > span');
            let date = '';
            
            let clicked = '';
            if(item.textContent.includes('Today')){
                const today = new Date();
                const numberDate = today.toISOString().split('T')[0];
                date = numberDate;
                updateTodo(id, {duedate: numberDate});
                updateTodo(id, {duedatestamp: Timestamp.fromDate(new Date(numberDate))});
                datesvg.style.fill = '#339966'
                datesvg.innerHTML = `<path d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>`;
                duedateeditbuttonspan.textContent = 'Today';
                clicked = 'one';
                document.querySelector(`.todo-item.count${id} p`).textContent = numberDate;
                if(document.querySelector(`.due .todo-item.count${id}`)){
                    editeddate.forEach(item => item.textContent = numberDate);
                }
                else{
                    const duedates = document.querySelector('.due-date > div > ul');
                    duedates.innerHTML = '';
                    getDate(token).then((data) => {
                        console.log('hi');
                        duedates.innerHTML = ''
                        data.forEach((todo) => {
                            console.log(todo.id);
                            console.log(todo.duedate);
                            console.log(todo.description);
                            todo.description = todo.description === undefined ? '' : todo.description;
                            let duedate = todo.duedate
                            if(todo.duedate === '9999-12-31'){
                                console.log('true');
                                duedate = ' ';
                                return;
                            }
                            const button =
                                `<li class="todo-item count${todo.id}">
                                    <button class="check count${todo.id}">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                        <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                                        <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                                        </svg>
                                    </button>
                                    <span>${todo.title}</span>
                                    <div class ='description'>${todo.description || " "}</div>
                                    <p>${duedate || " "}</p>
                                </li>`
                            duedates.insertAdjacentHTML('beforeend', button)
                        })
                        if (uldate.childElementCount === 0) {
                            console.log('hihihhi');
                            const li = document.createElement("li");
                            const p = document.createElement('p');
                            p.textContent = "No due dates"
                            li.appendChild(p);
                            uldate.appendChild(li);
                        }
                    }).catch((err) => {
                        console.log(err);
                    })
                }
            }
            else if(item.textContent.includes('Tomorrow')){
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1); 
                date = tomorrow.toISOString().split('T')[0];
                updateTodo(id, {duedate: tomorrow.toISOString().split('T')[0]});
                updateTodo(id, {duedatestamp: Timestamp.fromDate(new Date(date))});
                datesvg.style.fill = '#ffcc00'
                datesvg.innerHTML = `<path d="M450-751.54v-147.69h60v147.69h-60Zm242.92 100.77-41.15-41.15 103.15-106.54 42.54 43.15-104.54 104.54ZM751.54-450v-60h147.69v60H751.54ZM450-60.77v-147.31h60v147.31h-60ZM267.85-652.38 161.54-754.92l43.54-42.16 104.54 104.16-41.77 40.54Zm486.46 490.84L651.77-268.08l40.54-40.15 104.77 101.92-42.77 44.77ZM60.77-450v-60h147.69v60H60.77Zm143.92 288.46-41.77-43.54 103.16-103.15 21.69 20.46 22.08 21.08-105.16 105.15ZM480.09-260q-91.63 0-155.86-64.14Q260-388.28 260-479.91q0-91.63 64.14-155.86Q388.28-700 479.91-700q91.63 0 155.86 64.14Q700-571.72 700-480.09q0 91.63-64.14 155.86Q571.72-260 480.09-260Zm-.09-60q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/>`;
                duedateeditbuttonspan.textContent = 'Tomorrow';
                clicked = 'two';
                document.querySelector(`.todo-item.count${id} p`).textContent = date;
                if(document.querySelector(`.due .todo-item.count${id}`)){
                    editeddate.forEach(item => item.textContent = date);
                }
                else{
                    const duedates = document.querySelector('.due-date > div > ul');
                    duedates.innerHTML = '';
                    getDate(token).then((data) => {
                        console.log('hi');
                        duedates.innerHTML = ''
                        data.forEach((todo) => {
                            console.log(todo.id);
                            console.log(todo.duedate);
                            console.log(todo.description);
                            todo.description = todo.description === undefined ? '' : todo.description;
                            let duedate = todo.duedate
                            if(todo.duedate === '9999-12-31'){
                                console.log('true');
                                duedate = ' ';
                                return;
                            }
                            const button =
                                `<li class="todo-item count${todo.id}">
                                    <button class="check count${todo.id}">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                        <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                                        <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                                        </svg>
                                    </button>
                                    <span>${todo.title}</span>
                                    <div class ='description'>${todo.description || " "}</div>
                                    <p>${duedate || " "}</p>
                                </li>`
                            duedates.insertAdjacentHTML('beforeend', button)
                        })
                        if (uldate.childElementCount === 0) {
                            console.log('hihihhi');
                            const li = document.createElement("li");
                            const p = document.createElement('p');
                            p.textContent = "No due dates"
                            li.appendChild(p);
                            uldate.appendChild(li);
                        }
                    }).catch((err) => {
                        console.log(err);
                    })
                }
            }
            else if(item.textContent.includes('No')){
                updateTodo(id, {duedate: "9999-12-31"});
                updateTodo(id, {duedatestamp: Timestamp.fromDate(new Date('9999-12-31'))});
                date = '';
                datesvg.innerHTML = `<path d="M100-220v-220q0-22.38 10.62-43.42Q121.23-504.46 140-518v-102q0-41.92 29.04-70.96Q198.08-720 240-720h170q21.85 0 39.15 8.5Q466.46-703 480-688q13.54-15 30.85-23.5 17.3-8.5 39.15-8.5h170q41.92 0 70.96 29.04Q820-661.92 820-620v102q18.77 13.54 29.38 34.58Q860-462.38 860-440v220h-60v-80H160v80h-60Zm410-320h250v-80q0-17-11.5-28.5T720-660H550q-17 0-28.5 11.5T510-620v80Zm-310 0h250v-80q0-17-11.5-28.5T410-660H240q-17 0-28.5 11.5T200-620v80Zm-40 180h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"/>`;  
                duedateeditbuttonspan.textContent = 'ZZZ';
                clicked = 'three';
                document.querySelector(`.due .todo-item.count${id}`).remove();
                document.querySelectorAll(`.todo-item.count${id} p`).forEach(item => item.textContent = '')
            }
            else if(item.textContent.includes('Next')){
                const nextweek = new Date();
                nextweek.setDate(nextweek.getDate() + 7);
                date = nextweek.toISOString().split('T')[0];
                updateTodo(id, {duedate: nextweek.toISOString().split('T')[0]});
                updateTodo(id, {duedatestamp: Timestamp.fromDate(new Date(date))});
                datesvg.style.fill = '#6666ff'
                datesvg.innerHTML = `<path d="M440-273.85 586.15-420 440-566.15 397.85-524l104 104-104 104L440-273.85ZM172.31-140Q142-140 121-161q-21-21-21-51.31v-415.38Q100-658 121-679q21-21 51.31-21H340v-67.69Q340-798 361-819q21-21 51.31-21h135.38Q578-840 599-819q21 21 21 51.31V-700h167.69Q818-700 839-679q21 21 21 51.31v415.38Q860-182 839-161q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-415.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v415.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM400-700h160v-67.69q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H412.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46V-700ZM160-200v-440 440Z"/>`;   
                duedateeditbuttonspan.textContent = 'NextWeek';
                clicked = 'four';
                document.querySelector(`.todo-item.count${id} p`).textContent = date;
                if(document.querySelector(`.due .todo-item.count${id}`)){
                    editeddate.forEach(item => item.textContent = date);
                }
                else{
                    const duedates = document.querySelector('.due-date > div > ul');
                    duedates.innerHTML = '';
                    getDate(token).then((data) => {
                        console.log('hi');
                        duedates.innerHTML = ''
                        data.forEach((todo) => {
                            console.log(todo.id);
                            console.log(todo.duedate);
                            console.log(todo.description);
                            todo.description = todo.description === undefined ? '' : todo.description;
                            let duedate = todo.duedate
                            if(todo.duedate === '9999-12-31'){
                                console.log('true');
                                duedate = ' ';
                                return;
                            }
                            const button =
                                `<li class="todo-item count${todo.id}">
                                    <button class="check count${todo.id}">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                        <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                                        <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                                        </svg>
                                    </button>
                                    <span>${todo.title}</span>
                                    <div class ='description'>${todo.description || " "}</div>
                                    <p>${duedate || " "}</p>
                                </li>`
                            duedates.insertAdjacentHTML('beforeend', button)
                        })
                        if (uldate.childElementCount === 0) {
                            console.log('hihihhi');
                            const li = document.createElement("li");
                            const p = document.createElement('p');
                            p.textContent = "No due dates"
                            li.appendChild(p);
                            uldate.appendChild(li);
                        }
                    }).catch((err) => {
                        console.log(err);
                    })
                }
            }
            for(let i  of number){
                if(clicked === i){
                    document.querySelector(`.dateedit.count${id} > #${i}`).style.border = "1px solid lightgray";
                }
                else{
                    document.querySelector(`.dateedit.count${id} > #${i}`).style.border = "none";
                }
            }
             
        }))

        const priorityeditoverlaybuttons = document.querySelectorAll('.priorityeditoverlay > button');
        console.log(priorityeditoverlaybuttons);
        priorityeditoverlaybuttons.forEach(item => item.addEventListener('click', () => {
            updateTodo(id, {priority: Number(item.textContent[9])});
            console.log(typeof(item.textContent[9]));
            const priorityedit = document.querySelector('.descriptioneditbutton#priorityeditbutton');
            let clicked = '';
            switch(item.textContent[9]){
                case '1':
                    priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P1'
                    clicked = 'one';
                    break;
                case '2':
                    priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0066cc"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P2'
                    clicked = 'two';
                    break;
                case '3':
                    priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff6600"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P3'
                    clicked = 'three';
                    break;
                case '4':
                    priorityedit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cc0000"><path d="M480-163.08q-24.75 0-42.37-17.62Q420-198.33 420-223.08q0-24.75 17.63-42.37 17.62-17.63 42.37-17.63 24.75 0 42.37 17.63Q540-247.83 540-223.08q0 24.75-17.63 42.38-17.62 17.62-42.37 17.62Zm-54.61-196.15v-457.69h109.22v457.69H425.39Z"/></svg>P4'
                    clicked = 'four';
                    break;

            }
            for(let i of number){
                if(i === clicked){
                    document.querySelector(`.priorityedit.count${id} > #${i}`).style.border = "1px solid lightgray";
                }
                else{
                    document.querySelector(`.priorityedit.count${id} > #${i}`).style.border = "none";
                }
            }
            
            
        }))


    }
})

//close the editoverlay
const editoverlay = document.querySelector('.edit-overlay');
editoverlay.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target === editoverlay) {
        editoverlay.classList.remove('active');
        const selection = document.querySelectorAll('.selection');
        selection.forEach(item => item.classList.remove('active'));
    }
    const closebutton = e.target.closest('.closebox > button');
    console.log(closebutton);
    if (closebutton) {
        editoverlay.classList.remove('active');
        const selection = document.querySelectorAll('.selection');
        selection.forEach(item => item.classList.remove('active'));
    }



})

const duedateedit = document.querySelector('#duedateedit');
duedateedit.addEventListener('click', () => {
    const selection = document.querySelector('.selection.date');
    selection.classList.toggle('active');

    // const selection = document.querySelector('.selection');
    // selection.classList.toggle('active');

})

const priorityeditbutton = document.querySelector('#priorityeditbutton');
priorityeditbutton.addEventListener('click', () => {
    const selection = document.querySelector('.selection.priority');
    selection.classList.toggle('active');
})

function getRelativeDate(days) {
    const today = new Date();
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + days);
    return newDate.toDateString();
}


document.querySelector('.theme').addEventListener('click', () => {
    if(document.querySelector('.theme').classList.contains('dark')){
        document.documentElement.style.setProperty('--beige', 'beige')
        document.documentElement.style.setProperty('--white', 'white')
        document.documentElement.style.setProperty('--black', 'black')
        document.documentElement.style.setProperty('--blue', 'rgb(77, 141, 143)')
        document.querySelector('.theme').classList.remove('dark');
        document.querySelector('.theme > svg').innerHTML = `<path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>`
        
    }
    else{
        document.documentElement.style.setProperty('--beige', '#182c25')
        document.documentElement.style.setProperty('--white', '#004040')
        document.documentElement.style.setProperty('--black', '#d3f0f0')
        document.documentElement.style.setProperty('--blue', 'beige')
        document.querySelector('.theme').classList.add('dark');
        document.querySelector('.theme > svg').innerHTML = `<path d="M450-751.54v-147.69h60v147.69h-60Zm242.92 100.77-41.15-41.15 103.15-106.54 42.54 43.15-104.54 104.54ZM751.54-450v-60h147.69v60H751.54ZM450-60.77v-147.31h60v147.31h-60ZM267.85-652.38 161.54-754.92l43.54-42.16 104.54 104.16-41.77 40.54Zm486.46 490.84L651.77-268.08l40.54-40.15 104.77 101.92-42.77 44.77ZM60.77-450v-60h147.69v60H60.77Zm143.92 288.46-41.77-43.54 103.16-103.15 21.69 20.46 22.08 21.08-105.16 105.15ZM480.09-260q-91.63 0-155.86-64.14Q260-388.28 260-479.91q0-91.63 64.14-155.86Q388.28-700 479.91-700q91.63 0 155.86 64.14Q700-571.72 700-480.09q0 91.63-64.14 155.86Q571.72-260 480.09-260Zm-.09-60q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/>`

        
    }
})