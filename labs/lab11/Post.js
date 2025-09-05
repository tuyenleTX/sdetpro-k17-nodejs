class Post{
    // constructor(userId, id, title, body) {
    //     this._userId = userId;
    //     this._id = id;
    //     this._title = title;
    //     this._body = body;
    // }
    // getUserId() {
    //     return this._userId;
    // }
    // getId() {
    //     return this._id;
    // }
    // getTitle() {
    //     return this._title;
    // }
    // getBody() {
    //     return this._body;
    // }

    // setUserId(userId) {
    //     this._userId = userId;
    // }
    // setId(id) {
    //     this._id = id;
    // }
    // setTitle(title) {
    //     this._title = title;
    // }
    // setBody(body) {
    //     this._body = body;
    // }
    constructor({ userId, id, title, body }) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
      }
}

module.exports = Post;