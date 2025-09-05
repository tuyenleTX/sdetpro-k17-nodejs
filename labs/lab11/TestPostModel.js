//const Post = require("./Post");
const RequestHandler = require("./RequestHandler");
const readline = require("readline-sync");
// Excution
lab11();

// Function Declaration
async function lab11(){
   

    let requestHandler = new RequestHandler();
    let isPlaying = true;
     while(isPlaying) {
         requestHandler.printMenu();
         const option = requestHandler.getUserOption();
         if(option === 1) {
            const userId = requestHandler.getUserInput("User id: ");
            const allPost = await requestHandler.printAllPosts(userId);
            console.log(allPost);
         } else if (option === 2) {
            const userId = requestHandler.getUserInput("User id: ");
            const postId = requestHandler.getUserInput("Post id: ");
            const post = await requestHandler.printTargetPost(userId, postId);
            console.log(post);
         } else if (option === 0) {
             isPlaying = false;
             console.log("See you again!");
         } else {
             console.log("Nhap lui roi teo oi!");
         }
     }
}