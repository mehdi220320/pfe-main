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
   i = 1;
   dynamicId = "slide" + this.i;
  comment!:string;
  comments=this.servicepost.getComments();
  constructor(private servicepost:PostService) { }
  ngOnInit(): void {
    console.log(this.posts)
  }


  onComment(event: Event) {
    this.comment = (event.target as HTMLInputElement).value;
  }
  create(id:number){
    this.servicepost.addComment(new Comment(this.comment,new Date(),id));
    this.comment='';
  }

  addLike(id:number){
    this.servicepost.addLike(id);
    console.log(id);
  }
  counterValue!: number;
  slideTo(i: number):void{
    this.counterValue=i;
  }



}
