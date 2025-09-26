import { BaseAPIClient } from "./BaseAPIClient";

export default class UserAPI extends BaseAPIClient{
    async getUsers() {
        return this.get('/users');
    }
    async createAUser(userObj: any) {
        return this.post('/users', userObj);
    }
}