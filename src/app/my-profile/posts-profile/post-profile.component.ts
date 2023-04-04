import { Component, OnInit } from '@angular/core';

import {SafeUrl} from "@angular/platform-browser";
import {Post} from "../../models/Post";
import {PostService} from "../../service/post.service";
import {Comment} from "../../models/Comment";

@Component({
  selector: 'app-posts-profile',
  templateUrl: './post-profile.component.html',
  styleUrls: ['./post-profile.component.css']
})
export class PostProfileComponent implements OnInit {
  posts:Post[]=this.servicepost.getPosts();

  comment!:string;
  comments: Comment[] = [];

  onComment(event: Event) {
    this.comment = (event.target as HTMLInputElement).value;
  }
  create(id:number){
    this.comments.push(new Comment(this.comment,new Date(),id));
    this.comment='';
  }
  constructor(private servicepost:PostService) { }

  ngOnInit(): void {
    console.log(this.posts)
  }



}
