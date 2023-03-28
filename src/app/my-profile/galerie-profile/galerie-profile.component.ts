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
  constructor(private servicepost:PostService) { }
  ngOnInit(): void {
    for(let i=0;i<this.posts.length;i++){
      this.n+=this.posts[i].imagesUploads.length ;
    }
  }
  imgpost(post:Post):any{
    if(post.imagesUploads.length!==0)
      return post.imagesUploads[0].url;
    else
      return null;
  }




}
