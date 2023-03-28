import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/service/post.service';
import {FileHandle} from "../../models/FileHandle";
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  imagesUploads: FileHandle[] = [];
  textareaContent: string = '';
  constructor(private sanitizer: DomSanitizer,private postService: PostService) { }

  ngOnInit(): void {
  }
  onTextareaChange(event: Event) {
    this.textareaContent = (event.target as HTMLInputElement).value;
  }
  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const url = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
          this.imagesUploads.push({ file, url });
        };
        reader.readAsDataURL(file);
      }
    }
  }
  removeImages(i: number){
    this.imagesUploads.splice(i,1);
  }
  create() {
    const post = new Post(this.imagesUploads, this.textareaContent, new Date());
    this.postService.addPost(post);
    this.imagesUploads.splice(0,this.imagesUploads.length);
    this.textareaContent = '';
  }
}

