const { propfind } = require("../backend/routes");

async function todos() {
    try {
        const response = await fetch(`http://localhost:3000/todos`);
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
    
    
    
    
}



async function insert(){
    try {
        const request = new Request("http://localhost:3000/todos", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({title: "something to do", completed: false, priority: 4, duedate: "tomorrow"})
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

insert();
todos();