import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { SafeUrl } from "@angular/platform-browser";
import { Comment } from "../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private images: Image[] = [];
  posts: Post[] = [];
  constructor() { }
  j = 0;
  getPosts(): Post[] {
    return this.posts;
  }
  getImages(): Image[] {
    return this.images;
  }
  addPost(post: Post): void {
    for (let i = 0; i < post.imagesUploads.length; i++) {
      const url = post.imagesUploads[i].url;
      const id = this.j;
      this.images.push({ url, id });
    }
    this.j++;
    post.likes = 0;
    this.posts.push(post);
  }
  removePost(index: number) {
    this.posts.splice(index, 1);
  }
  comments: Comment[] = [];
  addComment(comment: Comment) {
    this.comments.push(comment);
  }
  getComments() {
    return this.comments;
  }
  addLike(id: number) {
    this.posts[id-1].likes+=1;
    console.log(this.posts[id-1]);
  }
}

export interface Image {
  url: SafeUrl;
  id: number;
}
