import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import {SafeUrl} from "@angular/platform-browser";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  images:SafeUrl[]=[];
  posts: Post[] = [];
  constructor() { }
  getPosts(): Post[] {
    return this.posts;
  }
  getImages(): SafeUrl[]{
    return this.images;
  }
  addPost(post: Post): void {
    for(let i=0;i<post.imagesUploads.length;i++)
    {
      this.images.push(post.imagesUploads[i].url);
    }
    this.posts.push(post);
  }
  removePost(index: number) {
    this.posts.splice(index, 1);
  }
}
