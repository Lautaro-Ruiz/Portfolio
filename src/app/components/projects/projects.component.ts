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
      projectImages: ['Main menu.png', 'perfil.png', 'Proceso de compra.png', 'carrito.png', 'lista de usuarios.png'],
      technologiesImages: ['AngularLogo.webp', 'typescript.svg', 'html5-fill.svg', 'css3-fill.svg']
    },
    {
      name: 'Salud Online',
      description: 'Description 2',
      linkGithub: 'https://github.com/bauticalvo/c-18-30-java-react',
      projectImages: ['Landing 1.png', 'Landing 2.png', 'Landing 3.png', 'Login.png', 'Perfil paciente.png'],
      technologiesImages: ['reactjs-line.svg', 'tailwind-css-fill.svg','spring-logo.png', 'java-line.svg', 'mysql logo.png']
    }
  ]

  highlightWord(text: string, word: string): string {
    const regex = new RegExp(`(${word})`, 'gi'); // Busca todas las apariciones, ignorando mayúsculas/minúsculas
    return text.replace(regex, '<span class="highlight">$1</span>');
  }
}
