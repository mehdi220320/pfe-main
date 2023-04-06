import {Component, Inject, Input} from '@angular/core';
import {Post} from "../../models/Post";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PostService} from "../../service/post.service";
import { SafeUrl } from '@angular/platform-browser';
import {Comment} from "../../models/Comment";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts:Post[]=this.servicepost.getPosts();
  @Input() post!: Post ;
  constructor(private servicepost:PostService) {
  }
  comment!:string;
  comments=this.servicepost.getComments();

  onComment(event: Event) {
    this.comment = (event.target as HTMLInputElement).value;
  }
  create(id:number){
    this.servicepost.addComment(new Comment(this.comment,new Date(),id));
    this.comment='';
    for(let i=0;i<this.posts.length;i++) {
      console.log("post id :" +this.posts[i].id);
    }
  }


  ngOnInit(){
    this.post.date
  }
}
