import { makeAutoObservable } from "mobx"

class PostModalStore {
    constructor() {
        makeAutoObservable(this)
    }
    isOpen = false
    open() {
        this.isOpen = true
    }
    close() {
        this.isOpen = false
    }
}

export default new PostModalStore()