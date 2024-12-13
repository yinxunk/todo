//tests for functionality of routes

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
const priobutton = document.querySelector('.category.two');
priobutton.addEventListener('click', () => {
    
    const priocontainer = document.querySelector('.priority-container');
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
    overlay.style.display = "block";
    
})

overlay.addEventListener('click', (event)=>{
    if(event.target === overlay){
        overlay.style.display = "none";
    }
})







const inneraddtask = document.querySelector(".add-activity");
inneraddtask.addEventListener('click', () => {
    inneraddtask.classList.toggle("hidebutton");
    const addoverlay = document.querySelector(".add-overlay.hidebutton");
    addoverlay.classList.toggle("hidebutton");


})

const cancel = document.querySelector(".cancel-enter > button:nth-of-type(1)");
cancel.addEventListener("click", () => {
    const inneraddtask = document.querySelector(".add-activity.hidebutton");
    const addoverlay = document.querySelector(".add-overlay");
    inneraddtask.classList.toggle("hidebutton");
    addoverlay.classList.toggle("hidebutton");
    const priocontainer = document.querySelector('.priority-container');
    priocontainer.setAttribute('class', 'priority-container hidecontainer');
    const priolevel = document.querySelectorAll('.priority-level');
    priolevel.forEach(element => element.setAttribute('class', 'priority-level hide '));
    

})


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
const prioritycontainer = document.querySelector('.priority-container');

prioritycontainer.addEventListener('click', (e) => {
    const button = e.target.closest('.priority-level');
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
        const prioritybutton = document.querySelectorAll('.priority-level');
        prioritybutton.forEach(button => button.style.backgroundColor ="white");
        button.style.backgroundColor = 'beige';
    } else {
        console.log("No priority-level button clicked.");
    }
});

//ADD A TODO


localStorage.clear()
let currentid = localStorage.getItem('counter')
    ? parseInt(localStorage.getItem('counter'),10)
    : 0;

const add = document.querySelector(".cancel-enter > button:nth-of-type(2)");
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
            <button class="check ${count}">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                        <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                        <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                </svg>
            </button>
            <span>${addtaskinput.value}</span>
            <div>${addtaskdescription.value}</div>
            <p>${date.value}</p>
        </li>`
        const ul = document.querySelector(".todo-list");
        ul.insertAdjacentHTML('beforeend', button);
        addtaskinput.value = ''
        addtaskdescription.value = '';
        date.value = '';
    
        console.log(count)
    }
    ul.innerHTML = '';
    
         await todos().then((data) => {
            data.forEach((todo) => {
                console.log(todo.id);
                console.log(todo.description)
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
                    <div>${todo.description}</div>
                    <p>${todo.duedate}</p>
                </li>`
            ul.insertAdjacentHTML('beforeend', button);
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
                        <div>${todo.description}</div>
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
                <button class="check count${todo.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                    <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                    <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                    </svg>
                </button>
                <span>${todo.title}</span>
                <div>${todo.description}</div>
                <p>${todo.duedate}</p>
            </li>`
            ul.insertAdjacentHTML('beforeend', button);
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
                    <div>${todo.description}</div>
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

// .then((data) => {
//     if(data != null){
//         duedates.innerHTML= ''
//         data.forEach((todo) => {
//             console.log(todo.id);
//             console.log(todo.duedate);
//             console.log(todo.description);
//             todo.description = todo.description === undefined? '' : todo.description;
//             const button = 
//             `<li class="todo-item">
//                 <button class="check count${todo.id}">
//                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
//                     <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
//                     <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
//                     </svg>
//                 </button>
//                 <span>${todo.title}</span>
//                 <div>${todo.description}</div>
//             </li>`
//             duedates.insertAdjacentHTML('beforeend', button)
//         })
//     }
// })

