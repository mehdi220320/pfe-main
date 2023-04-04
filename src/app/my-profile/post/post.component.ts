import {Component, Inject} from '@angular/core';
import {Post} from "../../models/Post";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {}
}
