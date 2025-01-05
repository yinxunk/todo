const login = async() => {
    const username = document.querySelector('#usernamelogin').value;
    const password = document.querySelector('#passwordlogin').value;
    try{
        const request = new Request("http://localhost:3000/todos/login", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({username, password})
        });
        const response = await fetch (request);
        
        if (!response.ok) {
            // Extract error message from response
            const errorData = await response.json();
            console.error('Login failed:', errorData.message);
            alert(errorData.message); // Display error to user
            return; // Stop further execution
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);
        console.log(localStorage.getItem('token'));
        window.location.href = 'index.html';
    } catch (err) {
        console.error('Error during login:', err);
        alert('An error occurred during login. Please try again later.');
    }
    
    

}

const register = async() => {
    const username = document.querySelector('#usernameregister').value;
    const password = document.querySelector('#passwordregister').value;
    const passwordconfirm = document.querySelector('#passwordconfirmregister').value;
    if(password === passwordconfirm){
        try{
            const request = new Request("http://localhost:3000/todos/register", {
                method:'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({username, password})
    
            });
            const response = await fetch(request);
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            } else{
                const data = await response.json();
                console.log(data);
            }
        }catch (err){
            console.log(err);
        }
        
    }
}

// document.querySelector('#Register').addEventListener('click', () =>{
//     register();
//     console.log('hi');
// });

document.querySelector('#Login').addEventListener('click', () =>{
    login();
    console.log('hi');
});