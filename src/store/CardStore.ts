import { makeAutoObservable } from "mobx"

class CardStore {
    constructor() {
        makeAutoObservable(this)
    }
    imageLoading = false
    loadImage() {
        this.imageLoading = false
    }
}

export default new CardStore()