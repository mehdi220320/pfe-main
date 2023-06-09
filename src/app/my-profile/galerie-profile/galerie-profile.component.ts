import { Component, OnInit } from '@angular/core';

import {SafeUrl} from "@angular/platform-browser";
import {Post} from "../../models/Post";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-galerie-profile',
  templateUrl: './galerie-profile.component.html',
  styleUrls: ['./galerie-profile.component.css']
})

export class GalerieProfileComponent implements OnInit {
  n!:number;
  posts:Post[]=this.servicepost.getPosts();
  images=this.servicepost.getImages();
  post!:Post;
  postRequired(id:number){
    this.post=this.posts[id];
    console.log(this.post.date);
  }
  constructor(private servicepost:PostService) { }
  ngOnInit(): void {
    for(let i=0;i<this.posts.length;i++){
      this.n+=this.posts[i].imagesUploads.length ;
    }
  }




}
