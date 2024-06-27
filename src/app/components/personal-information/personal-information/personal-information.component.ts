import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  
  downloadCV(): void {
    const link = document.createElement('a');
    link.href = `assets/img/Ruiz Lautaro CV.pdf`;
    link.download = 'Lautaro_Ruiz_CV.pdf';
    link.click();
  } 
}
