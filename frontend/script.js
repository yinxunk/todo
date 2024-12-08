//tests for functionality of routes
/** 
async function todos() {
    try {
        const response = await fetch(`http://localhost:3000/todos`);
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json();
        data.forEach((todo, index) => {
            console.log(`Todo ${index + 1}:`, todo);
        });
        
    }catch(error){
        console.log(error);
    }
    
    
    
    
}



async function insert(){
    try {
        const request = new Request("http://localhost:3000/todos", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({title: "nothing to do", completed: false, priority: 4, duedate: "tomorrow"})
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



async function ushantbehere(){
    try{
        const request = new Request("http://localhost:3000/todos/12", {
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

async function checkcomplete(){
    try {
        const request= new Request("http://localhost:3000/todos/13", {
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


async function deletecomplete(){
    try{
        const request = new Request("http://localhost:3000/todos/", {
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
*/

async function getAllTodos(){
    try{
        const response = fetch("http://localhost:3000/todos")
        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        
    }catch(error){
        console.log(error);
    }
    
}

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
    
    
})
//to read sidebar

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


const button = `<li class="todo-item">
                    <button class="check">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M480.17-132q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            <path class="tick" d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/>
                        </svg></button><span>awdawd</span>
                </li>`

const todoitembutton = document.querySelectorAll(".check");
todoitembutton.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.currentTarget.parentNode)
        e.currentTarget.parentNode.remove()
        
    })
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
})



