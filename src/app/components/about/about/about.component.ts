import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  skills = [
    {name: 'Java', image: 'Java.webp', height: 100, width: 100},
    {name: 'Spring', image: 'Spring_Framework.webp', height: 140, width: 130},
    {name: 'JavaScript', image: 'JS.webp', height: 140, width: 140},
    {name: 'GitHub', image: 'GitHub.webp', height: 100, width: 140},
    {name: 'MySQL', image: 'mysql.webp', height: 110, width: 100},
    {name: 'Angular', image: 'Angular.webp', height: 100, width: 100},
    {name: 'C', image: 'C.webp', height: 90, width: 85},
  ]

  education = [
    {title: '', place: '',  since: '', until: ''}
  ]

  getImagePath(image: string): string {
    return `assets/img/${image}`;
  }
}
