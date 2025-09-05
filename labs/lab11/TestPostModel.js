//const Post = require("./Post");
const RequestHandler = require("./RequestHandler");
const readline = require("readline-sync");
// Excution
lab11();

// Function Declaration
async function lab11(){
    // Given params
    //const userId = 1;
    //const postId = 5;
    const userId = Number(readline.question("User id: "));
    const postId = Number(readline.question("Post id: "));
    // Create RequestHandler object

    let requestHandler = new RequestHandler();
    
     const post = await requestHandler.printTargetPost(userId, postId);
     const allPost = await requestHandler.printAllPosts(userId);
     console.log(post);
     console.log(allPost);
}