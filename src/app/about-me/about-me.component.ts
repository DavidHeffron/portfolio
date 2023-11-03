import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  images: {src: string, description: string}[] = [];
  responsiveOptions: any[] | undefined;
  autoplay = 5000;

  constructor(){

    this.images = [
      {src: 'assets/images/IMG_3067.jpg', description: 'Blue grotto cave in Capri, Italy.'},
      {src: 'assets/images/IMG_0491.JPEG', description: 'Exploring the desert in Dubai with four wheelers.'},
      {src: 'assets/images/IMG_0516.jpg', description: 'Feeding the camels in Dubai!'},
      {src: 'assets/images/IMG_1294.jpg', description: 'In front of the Burj Al Arab in Dubai.'},
      {src: 'assets/images/IMG_2678.jpg', description: 'Trevi Fountain in Rome, Italy.'},
    ];
  }
}
