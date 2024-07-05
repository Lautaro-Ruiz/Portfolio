import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  work_experiences = [
    {
      charge: 'Back-end Developer', company: 'No Country', since: 'May. 2024', until: 'Jun. 2024', current_job: false, 
      description: 'Simulación Laboral Tech donde trabajé como Backend Developer y los aspectos positivos que puedo destacar son: ',
      image: 'No-Country.webp', height: 95, width: 150 , mode: 'Remote',
      positive_aspects: ["Apliqué Spring Security y aprendí a usar JWT", "Realicé tareas relacionadas a bases de datos y Java/Spring Boot.",  "Mejoré la comunicación en equipo al trabajar en conjunto con varios roles.", "Trabajé con Sprints y con un TL.", "Daily Meetings."]
    }
  ]

  getImagePath(image: string): string {
    return `assets/img/${image}`;
  }
}
