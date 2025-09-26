import { BaseAPIClient } from "./BaseAPIClient";

export default class PostAPI extends BaseAPIClient{
    async getPosts() {
        return this.get('/posts');
    }
    async createAPost(postObj: any) {
        return this.post('/users', postObj);
    }
}