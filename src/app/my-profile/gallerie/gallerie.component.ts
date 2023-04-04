import { Component } from '@angular/core';
import {Post} from "../../models/Post";
import {PostService} from "../../service/post.service";
import {interval, Subscription} from "rxjs";
import {SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent {
  img = new Image();
  isTall=false;
  isWide=false;
  posts:Post[]=this.servicepost.getPosts();
  images:SafeUrl[]=this.servicepost.getImages();
  private intervalId!: Subscription;

  constructor(private servicepost:PostService) { }

  ngOnInit(): void {
    this.img.src = 'assets/imgs/sliderbar/image-1.jpg';
    this.img.onload = () => {
      console.log(`Image width: ${this.img.naturalWidth}`);
      if(this.img.naturalHeight>400){
        this.isTall=true;
      }
      if(this.img.naturalWidth>400){
        this.isWide=true;
      }
    };
  }


}
