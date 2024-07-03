import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css']
})
export class TechStackComponent {
  skills = [
    {name: 'JavaScript', image: 'JS.webp', height: 140, width: 140},
    {name: 'C', image: 'C.webp', height: 70, width: 65},
    {name: 'Spring', image: 'Spring_Framework.webp', height: 140, width: 130},
    {name: 'GitHub', image: 'GitHub.webp', height: 90, width: 120},
    {name: 'MySQL', image: 'mysql.webp', height: 100, width: 80},
    {name: 'Angular', image: 'Angular.webp', height: 100, width: 100},
    {name: 'Java', image: 'Java-Logo.png', height: 100, width: 110},
  ]

  getImagePath(image: string): string {
    return `assets/img/${image}`;
  }

  getSkillRows(): any[][] {
    const rowSize = 4;
    const rows = [];
    for (let i = 0; i < this.skills.length; i += rowSize) {
      rows.push(this.skills.slice(i, i + rowSize));
    }
    return rows;
  }
}
