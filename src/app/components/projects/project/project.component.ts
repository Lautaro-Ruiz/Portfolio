import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects = [
    {
      name: 'Salud Online', description: ' una plataforma que conecta a pacientes con una diversidad de especialistas de alta calidad, ofreciendo consultas accesibles y disponibles en cualquier momento. Mejora la accesibilidad, la calidad de la atención médica y optimiza el uso del tiempo y los recursos médicos, permitiendo tener la solución al alcance de un click, tan solo basta con registrar tu cuenta y ya tendrás acceso a turnos con el médico que elijas. Para llevar a cabo esta proyecto se realizó una investigación de las necesidades de los usuarios y benchmarking para poder realizar el diseño exacto y brindarle solución a nuestros usuarios. Se abordó el Frontend de la web mediante el uso de #React y #Tailwind. Finalmente, para el Backend se usó #Java #Spring Boot, donde destacamos la implementación de #Spring Security y #JWT para la autenticación de usuarios. Para la persistencia de pacientes, doctores y registros de citas médicas se conectó a una base de datos #MySQL.',
      aptitudes: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'MySQL', 'GitHub'],
      since: 'May. 2024', until: 'Jun. 2024', current_project: false,
      github: ['https://github.com/bauticalvo/c-18-30-java-react'],
      images: [
        {name: 'Landing.webp', width: 250, height: 250},
        {name: 'Perfil-paciente.webp', width: 250, height: 250}
      ],
      associated_with: 'No country'
    },
    {
      name: 'To Do List', description: 'Cree una To Do List con Angular para el frontend y Spring Boot + Java para el backend, donde desarrollé una API REST que proporciona endpoints para la gestión de tareas, y así poder realizar peticiones fetch desde el lado del cliente. La web permite realizar operaciones CRUD, ordenar por estado o prioridad las tareas de manera ascendente o descendente y buscarlas por su nombre.',
      aptitudes: ['Java', 'Spring', 'GitHub', 'Angular'],
      since: 'Mar. 2024', until: 'Jun. 2024', current_project: false,
      github: ['https://github.com/Lautaro-Ruiz/To-Do-List-', 'https://github.com/Lautaro-Ruiz/Task-Service-for-To-Do-List-with-Java-Spring-Boot'],
      images: [
        {name: 'Home ToDo.webp', width: 250, height: 250}
      ],
      associated_with: ''
    }
  ]

  getImagePath(image: string): string {
    return `assets/img/${image}`;
  }

}
