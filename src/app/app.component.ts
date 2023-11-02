import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/David_Heffron_Resume.pdf');
    link.setAttribute('download', `DavidHeffronResume.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}

}
