import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects = [
    {
      name: 'Salud Online',
      first_description: 'Un proyecto en el que colaboré donde desarrollamos una plataforma que conecta a pacientes con una diversidad de especialistas de alta calidad. Ofrece consultas accesibles y disponibles en cualquier momento. Mejora la accesibilidad, la calidad de la atención médica y optimiza el uso del tiempo y los recursos médicos, permitiendo tener la solución al alcance de un click para obtener tu turno.',
      second_description: 'Para este proyecto se realizó una investigación de las necesidades de los usuarios y benchmarking para poder realizar el diseño exacto y brindarle solución a nuestros usuarios. Se abordó el Frontend de la web mediante el uso de React y Tailwind. Finalmente, para el Backend se usó Java Spring Boot, donde destacamos la implementación de Spring Security y JWT para la autenticación de usuarios. Para la persistencia de pacientes, doctores y registros de citas médicas se conectó a una base de datos MySQL.',
      aptitudes: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'MySQL', 'GitHub'],
      since: 'May. 2024', until: 'Jun. 2024', current_project: false,
      github: [{url: 'https://github.com/bauticalvo/c-18-30-java-react', label: ''}],
      images: [
        {name: 'L1.png', width: 900, height: 550},
        {name: 'Perfil-paciente.webp', width: 900, height: 550}
      ],
      associated_with: 'No country',
      front_page: 'No-Country.webp', width_front_page: 150, height_front_page: 95,
      currentImageIndex: 0  
    },
    {
      name: 'To Do List',
      first_description: 'Desarrollé una To Do List para gestionar tareas diarias. Para el frontend utilicé Angular y para el backend Java y Spring, donde cree una API REST que proporciona endpoints para la gestión de tareas, y así poder realizar peticiones fetch desde el lado del cliente y hacer operaciones CRUD,  tales como crear, eliminar, editar, ordenar por estado o prioridad las tareas o buscarlas por su nombre.',
      second_description: '',
      aptitudes: ['Java', 'Spring', 'GitHub', 'Angular'],
      since: 'Mar. 2024', until: 'Jun. 2024', current_project: false,
      github: [
        {url: 'https://github.com/Lautaro-Ruiz/To-Do-List-', label: 'Frontend'}, 
        {url: 'https://github.com/Lautaro-Ruiz/Task-Service-for-To-Do-List-with-Java-Spring-Boot', label: 'Backend'}
      ],
      images: [
        {name: 'Home ToDo.webp', width: 900, height: 500}
      ],
      associated_with: '',
      front_page: 'ToDo.jpg', width_front_page: 155, height_front_page: 105,
      currentImageIndex: 0  
    }
  ]

  getImagePath(image: string): string {
    return `assets/img/${image}`;
  }

  nextImage(project: any): void {
    project.currentImageIndex = (project.currentImageIndex + 1) % project.images.length;
  }

  prevImage(project: any): void {
    project.currentImageIndex = (project.currentImageIndex - 1 + project.images.length) % project.images.length;
  }
}
