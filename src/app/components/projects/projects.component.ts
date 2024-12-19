import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'MovieBox',
      description: 'Description 1',
      linkGithub: 'https://github.com/Lautaro-Ruiz/Movie-Box',
      projectImages: [''],
      technologiesImages: ['']
    },
    {
      name: 'Salud Online',
      description: 'Description 2',
      linkGithub: 'https://github.com/bauticalvo/c-18-30-java-react',
      projectImages: [''],
      technologiesImages: ['']
    }
  ]

  highlightWord(text: string, word: string): string {
    const regex = new RegExp(`(${word})`, 'gi'); // Busca todas las apariciones, ignorando mayúsculas/minúsculas
    return text.replace(regex, '<span class="highlight">$1</span>');
  }
}
