export class Like{
    private _likes!:number;
    private _idPost!:number;
    constructor() {
    }

    get likes(): number {
        return this._likes;
    }

    set likes(value: number) {
        this._likes = value;
    }

    get idPost(): number {
        return this._idPost;
    }

    set idPost(value: number) {
        this._idPost = value;
    }
}
