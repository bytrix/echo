import { makeAutoObservable } from "mobx";
import request from "../utils/request";

class PostStore {
    constructor() {
        makeAutoObservable(this);
    }
    async getPosts() {
        const posts = await request('/api/posts');
        return posts.data;
    }
}

export default new PostStore();