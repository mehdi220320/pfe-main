import {FileHandle} from "./FileHandle";

export class Post{
  private _id!: number;
  private _textareaContent!: string;
    private _imagesUploads: FileHandle[] = [];
    private _date!:Date;
    private _likes!:number;
  get likes(): number {
    return this._likes;
  }

  set likes(value: number) {
    this._likes = value;
  }

  /*
constructor( imagesUploads: FileHandle[] = [],
            textareaContent: string,
            date:Date) {
  this._id=++Post.lastId;
  this._textareaContent=textareaContent;
  this.imagesUploads = [...imagesUploads];
  this._date=date;
}*/


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get textareaContent(): string {
    return this._textareaContent;
  }

  set textareaContent(value: string) {
    this._textareaContent = value;
  }

  get imagesUploads(): FileHandle[] {
    return this._imagesUploads;
  }

  set imagesUploads(value: FileHandle[]) {
    this._imagesUploads = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
}
