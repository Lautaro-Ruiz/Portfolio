import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const button = document.querySelector('.scroll-to-top') as HTMLElement;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const viewportHeight = window.innerHeight;
    
    // Mostrar el botón si el usuario ha desplazado más allá de la altura de la ventana
    if (scrollPosition > viewportHeight) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  }

  ngOnInit() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        setTimeout(() => {
          this.onWindowScroll();
        }, 100);
      });
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
