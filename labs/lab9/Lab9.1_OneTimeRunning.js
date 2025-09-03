const readline = require("readline-sync");
const BASE_URL = "https://jsonplaceholder.typicode.com";
const USER_URL = `${BASE_URL}/users`;
const POST_URL = `${BASE_URL}/posts`;

app();

function app() {
        printMenu();
        let option = getUserInput(`Please select an option: `);
        console.log(option);
        if (option === 1) {
            console.log("Option 1 is selected");
            return printPostContentByPostIdAndUserId();
        }
        else if (option === 2) {
            console.log("Option 2 is selected")
            return printAllPostsByUserId();
        }
        else if (option === 3) {
            isPlaying = false;
            console.log("See you again!");
        } else {
            console.log("Nhap lui roi teo oi");
        }
}

function printMenu() {
    console.log(`---Menu---
    1: Print a post by user id and post id
    2: Print all posts by user id
    3: Exit program
    `);
}

function getUserInput(inputQuestion) {
    return Number(readline.question(inputQuestion));
}

function printAllPostsByUserId() {
    let userId = Number(getUserInput(`User id: `));
    return getAllPostsByUser(userId).then(function (returndData) {
        console.log(returndData.userRelatedPost);
        return returndData.userRelatedPost;
    })
}

function printPostContentByPostIdAndUserId() {
    let userId = Number(getUserInput(`User id: `));
    return getAllPostsByUser(userId).then(function (returndData) {
        if(returndData.hasUser) {
            let postId = Number(getUserInput(`Post id: `));
            const targetPost = returndData.userRelatedPost.filter(function (post) {
                return post.id === postId;
            })
            console.log(targetPost);
            return targetPost;
        }
    })
}
    
function getAllPostsByUser(userId) {
    //let userId = Number(getUserInput(`User id: `));
    return fetch(`${USER_URL}/${userId}`).then(function (userResponse) {
        let hasUser = userResponse.ok;
        if (hasUser) {
            return fetch(POST_URL).then(function (response) {
                return response.json().then(function (posts) {
                    const userRelatedPost = posts.filter(function (post) {
                        return post.userId === userId;
                    });
                    //console.log(userRelatedPost);
                    return {
                        hasUser: true,
                        userRelatedPost: userRelatedPost
                    }
                });
            })
        } else {
            console.log(`Invalid user id`);
            return { hasUser: false };
        }
    })
}

