const Post = require("./Post");
class RequestHandler {
    
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }
    async getTargetPost(targetUserId, postId) {
        // Construct the returned data as a Post data model from class Post
        const targetUserPosts = await this._getAllPosts(targetUserId);
        const targetPost = targetUserPosts.find(function(post) {
            return post.id === postId;
        })
        if(!targetPost) {
            console.log(`The post id: ${postId} for user ${targetUserId} does not exist!`);
            return undefined;
        }
        const {userId, id, title, body} = targetPost;
        return targetPost;
    }

    async getAllPosts(targetUserId) {
        let allPosts = [];
        // Construct the returned data as a [ Post data model ] from class Post
        const targetUserPosts = await this._getAllPosts(targetUserId);
        for(const post of targetUserPosts) {
            const {userId, id, title, body} = post;
            allPosts.push(new Post(userId, id, title, body));
        }
        return allPosts;
    }

    async _getAllPosts(userId) {
        const postEndPoint = `${this._baseUrl}/posts`;
        const response = await fetch(postEndPoint);
        const allPosts = await response.json();

        return allPosts.filter(function(post){
            return post.userId === userId;
        })

       
    }
}
module.exports = RequestHandler;