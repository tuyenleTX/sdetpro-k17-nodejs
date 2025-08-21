//data
const todoEndpoint = "https://jsonplaceholder.typicode.com/todos/1";

//usage
test(todoEndpoint); 

//logic
function test(url) {
    fetch(url)
        .then(getResponse)
        .then(validateResponse);
}

//Support functions
function getResponse(response) {
    return response.json();
}

function validateResponse(todo1Object) {
    if(todo1Object.completed) 
        console.log("Completed");
    else 
        console.log("InProgress");
}
