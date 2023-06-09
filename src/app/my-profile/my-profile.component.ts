import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {


  constructor(private router: Router) { }

  isActive(path: string): boolean {
    return this.router.isActive(path, true);
  }
  ngOnInit(): void {
  }

}
