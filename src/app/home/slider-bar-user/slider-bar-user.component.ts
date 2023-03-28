import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-slider-bar-user',
  templateUrl: './slider-bar-user.component.html',
  styleUrls: ['./slider-bar-user.component.css']
})
export class SliderBarUserComponent implements OnInit {
  ims: string[]=['assets/imgs/sliderbar/tablexchair.jpg',
    'assets/imgs/slide/bois.jpg',
    'assets/imgs/slide/bouchons.webp',
    'assets/imgs/sliderbar/bed.webp',
    'assets/imgs/sliderbar/chair.webp',
    'assets/imgs/sliderbar/clock.jpg',
    'assets/imgs/sliderbar/phones.jpg',
    'assets/imgs/sliderbar/table.jpg',
    'assets/imgs/sliderbar/tvs.jpg'
  ] ;
  press=false;
  @ViewChild('imageContainer') imageContainer!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
     document.addEventListener('click', (event) => {
       const slideContainer = document.querySelector('.slide-container1');
       if (!slideContainer?.contains(event.target as Node)) {
         this.router.navigate(['#']);
         this.press=false;
       }
     });
    setInterval(()=>{
      this.autoSlide();
      for(let i=0;i<this.ims.length-1;i++)
      {
        if(this.ims[i]==undefined){
          this.ims[i]='assets/imgs/sliderbar/image-9.jpg';
        }
      }
    },2000);
  }

  changeimg(index:number){
    var img=this.ims[index];
    this.ims[index]=this.ims[2];
    this.ims[2]=img;
    this.press=true;
  }
  autoSlide(){
    if(!this.press){
      for(let i=0;i<this.ims.length-1;i++)
      {
        var img=this.ims[i];
        this.ims[i]=this.ims[i-1];
        this.ims[i-1]=img;
      }
    }
    else{
      for(let i=0;i<this.ims.length-1;i++)
      {
        if(i!=2){
          if(i-1!=2){
            var img=this.ims[i];
            this.ims[i]=this.ims[i-1];
            this.ims[i-1]=img;
          }
          else{
            var img=this.ims[i];
            this.ims[i]=this.ims[i-2];
            this.ims[i-2]=img;
          }
        }
      }
    }
  }

}
