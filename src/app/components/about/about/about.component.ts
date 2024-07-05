import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  education = [
    {title: 'Tec. Universitario en Programación', place: 'Universidad Tecnológica',  since: 'Mar. 2022', until: 'Dic. 2024', image: 'UTN_logo.jpg', width: 120,  height:95},
    {title: 'Bachiller en Humanidades', place: 'Instituto San Antonio María Gianelli', since: 'Jun. 2016', until: 'Dic. 2021', image: 'school.png', width: 110,  height:105}
  ]

  getImagePath(image: string): string {
    return `assets/img/${image}`;
  }
}
