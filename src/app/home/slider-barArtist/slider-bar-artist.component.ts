import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-slider-barArtist',
  templateUrl: './slider-bar-Artist.component.html',
  styleUrls: ['./slider-bar-Artist.component.css']
})
export class SliderBarArtistComponent implements OnInit {
  ims: string[]=['assets/imgs/sliderbar/image-1.jpg',
    'assets/imgs/sliderbar/image-2.jpg',
    'assets/imgs/sliderbar/image-3.jpg',
    'assets/imgs/sliderbar/image-4.jpg',
    'assets/imgs/sliderbar/image-5.jpg',
    'assets/imgs/sliderbar/image-6.jpg',
    'assets/imgs/sliderbar/image-7.jpg',
    'assets/imgs/sliderbar/image-8.jpg',
    'assets/imgs/sliderbar/image-9.jpg'
  ] ;
  press=false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    document.addEventListener('click', (event) => {
      const slideContainer = document.querySelector('.slide-container');
      if (!slideContainer?.contains(event.target as Node)) {
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