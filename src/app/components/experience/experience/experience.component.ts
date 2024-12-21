import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  description = [
    'Desarrollo de sistema para conectar médicos con pacientes',
    'Realización de tareas con Spring Boot y Spring Security',
    'Uso de JWT',
    'Gestión de base de datos relacional en MySQL',
    'Comunicación efectiva en equipo entre varios roles y un Team Leader'
  ]
}
