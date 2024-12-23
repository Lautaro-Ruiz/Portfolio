import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroductionSectionComponent } from './components/introduction-section/introduction-section.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience/experience.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { EducationComponent } from './components/education/education.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, IntroductionSectionComponent, ProjectsComponent, ExperienceComponent, EducationComponent, TechStackComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  private projectsSection: HTMLElement | null = null; // Inicializar la propiedad como null

  ngOnInit() {
    // Asegurarse de que el elemento de la sección de proyectos esté disponible
    this.projectsSection = document.getElementById('projects');

    // Agregar el comportamiento de desplazamiento suave y gradual
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        
        // Obtener el destino del enlace
        const targetId = anchor.getAttribute('href')?.substring(1);
        const target = document.getElementById(targetId || '');

        if (target) {
          this.smoothScrollTo(target);
        }
      });
    });
  }

  // Función de desplazamiento suave y gradual
  smoothScrollTo(target: HTMLElement) {
    let startPosition = window.pageYOffset; // Posición inicial
    let targetPosition = target.getBoundingClientRect().top + startPosition; // Posición de destino
    let distance = targetPosition - startPosition; // Distancia que debemos recorrer
    let duration = 1000; // Duración del desplazamiento en ms (ajústalo según lo desees)
    let startTime: number;

    const scroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime; // Iniciar tiempo cuando se llama por primera vez
      let timeElapsed = currentTime - startTime;
      let run = this.ease(timeElapsed, startPosition, distance, duration);

      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(scroll); // Llamar de nuevo si aún no se alcanza la duración
      }
    };

    requestAnimationFrame(scroll); // Iniciar la animación
  }

  // Función de easing (suavizado)
  ease(t: number, b: number, c: number, d: number) {
    let ts = (t /= d) * t;
    let tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  }

  // Manejar el desplazamiento y mostrar la flecha flotante
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    // Mostrar la flecha cuando el scroll esté por debajo de 200px (ajusta este valor según lo que prefieras)
    if (scrollPosition > 750) {
      document.querySelector('.scroll-to-top')?.classList.add('visible');
    } else {
      document.querySelector('.scroll-to-top')?.classList.remove('visible');
    }
  }

  // Función para desplazar la página suavemente hacia arriba
  scrollToTop() {
    const target = document.body; // Utilizamos el cuerpo como objetivo para llegar al principio
    this.smoothScrollTo(target);
  }
}
