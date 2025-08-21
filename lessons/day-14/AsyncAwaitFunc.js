//data
const todoEndpoint = "https://jsonplaceholder.typicode.com/todos/1";

//usage
test(todoEndpoint); 

//logic
async function test(url) {
    const response = await fetch(url);
    const jsonObject = response.json();
    if(jsonObject.completed) 
        console.log("Completed");
    else 
        console.log("InProgress");
}

//Support functions
/* function getResponse(response) {
    return response.json();
}

function validateResponse(todo1Object) {
    if(todo1Object.completed) 
        console.log("Completed");
    else 
        console.log("InProgress");
} */
