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
      description: 'Sistema de alquiler de películas. El usuario puede registrarse e iniciar sesión, ver películas, generar reseñas de las mismas, gestionar su lista de favoritos y carrito, y poder simular un proceso de compra de películas. El administrador es capaz de ver las distintas películas y opiniones de los usuarios y una lista de los mismos. Puede ver sus bibliotecas para poder devolver las películas cuando se acerquen al local, administrar pagos en efectivo, dar de baja cuentas registradas y finalmente gestionar las deudas de los usuarios.',
      linkGithub: 'https://github.com/Lautaro-Ruiz/Movie-Box',
      projectImages: ['Main menu.png', 'perfil.png', 'Proceso de compra.png', 'carrito.png', 'lista de usuarios.png'],
      technologiesImages: ['AngularLogo.webp', 'typescript.svg', 'html5-fill.svg', 'css3-fill.svg'],
      currentImageIndex: 0,
      isAnimating: false 
    },
    {
      name: 'Salud Online',
      description: 'Sistema que conecta a pacientes con una diversidad de especialistas. El usuario puede registrarse e iniciar sesión y ver los distintos médicos disponibles y a partir de allí, solicitar un turno. Por su parte, el médico, puede crear su perfil, detallar información sobre sus consultas médicas y recibir turnos.',
      linkGithub: 'https://github.com/bauticalvo/c-18-30-java-react',
      projectImages: ['Landing 1.png', 'Landing 2.png', 'Landing 3.png', 'Login.png', 'Perfil paciente.png'],
      technologiesImages: ['reactjs-line.svg', 'tailwind-css-fill.svg','spring-logo.png', 'java-line.svg', 'mysql logo.png'],
      currentImageIndex: 0,
      isAnimating: false  
    }
  ]

  previousImage(project: any): void {
    if (!project.isAnimating) {
      project.isAnimating = true;
      setTimeout(() => (project.isAnimating = false), 400); // Duración de la animación
      if (project.currentImageIndex > 0) {
        project.currentImageIndex--;
      } else {
        project.currentImageIndex = project.projectImages.length - 1; // Ir al final
      }
    }
  }
  
  nextImage(project: any): void {
    if (!project.isAnimating) {
      project.isAnimating = true;
      setTimeout(() => (project.isAnimating = false), 400); // Duración de la animación
      if (project.currentImageIndex < project.projectImages.length - 1) {
        project.currentImageIndex++;
      } else {
        project.currentImageIndex = 0; // Volver al inicio
      }
    }
  }
  
}
