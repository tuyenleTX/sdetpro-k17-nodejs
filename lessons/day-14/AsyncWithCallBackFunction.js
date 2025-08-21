const targetUrl = "https://sdetpro.com/";

//callback hell
sendRequest(targetUrl, function(response) {
    processResponse(response, function(statusCode) {
        validateResponse(statusCode);
    })
})

//asyncronous
function sendRequest(url, callback){
    console.log(`1. Sending request to url ${url}`);
    setTimeout(function () {
        callback({status: 200});
    }, 1 * 1000);
}

//asyncronous
function processResponse(response, callback) {
    console.log(`2. Processng response`);
    setTimeout(function() {
        callback(response.status);
    }, 1*1000);
}

//synchronous
function validateResponse(statusCode) {
    console.log(`3. Validatng response: ${statusCode}`);
    if(statusCode === 200) console.log("Passed");
    else console.error("Failed");
}

// 1. Callback -> callback hell: nested callback
// 2. Promise + thenable chain
// 3. Async / await 