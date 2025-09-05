const readline = require("readline-sync");
const Post = require("./Post");
class RequestHandler {
    printMenu() {
        console.log(`Menu: 
        1. Print all posts relates to user
        2. Print a post content
        0. Exit program
        `)
    }

    getUserOption() {
        return Number(readline.question("Please select your option: "));
    }

    getUserInput(question) {
        return Number(readline.question(question));
    }
    
    async  printTargetPost(userId, postId) {
        // Construct the returned data as a Post data model from class Post
        const returnedData = await this._getAllPosts(userId);
        if (returnedData.hasUser) {
            //const postId = getUserInput("Post Id: ");
            const targetPost = returnedData.relatedPostsByUserId.filter(function (post) {
                return post.id === postId;
            });
            //console.log(targetPost);
            const posts = targetPost.map(item => new Post(item));
            return posts[0];
        }
    }

    async printAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        const returnedData = await this._getAllPosts(userId);
        if (returnedData.hasUser) {
            //console.log(returnedData.userRelatedPosts);
            //return returnedData.relatedPostsByUserId;
            const posts = returnedData.relatedPostsByUserId.map(item => new Post(item));
            return posts;
        }
    }

    async _getAllPosts(userId) {
        const BASE_URL = "https://jsonplaceholder.typicode.com/";
        const USER_ENDPOINT = `${BASE_URL}/users`;
        const usersResponse = await fetch(`${USER_ENDPOINT}/${userId}`);
        
        const hasUser = usersResponse.ok;1
        if (hasUser) {
            const postsResponse = await fetch(`${BASE_URL}/posts`);
            const jsonPostsResponse = await postsResponse.json();
            const relatedPostsByUserId = jsonPostsResponse.filter(function (post) {
                return post.userId = userId;
            });
            return {
                hasUser: true,
                relatedPostsByUserId: relatedPostsByUserId
            }
        } else {
            console.log(`User Id 0${userId} is not existing`);
            return { hasUser: false };

        }

    }
}
module.exports =  RequestHandler;