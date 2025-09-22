const RequestHandler = require("./RequestHandler");

lab11();

async function lab11() {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const userId = 1;
    const postId = 1;
    
    
    const reqHandler = new RequestHandler(BASE_URL);
    const post = await reqHandler.getTargetPost(userId, postId);
    const allpost = await reqHandler.getAllPosts(userId);
    
    console.log(post);

    console.log(allpost);
}
