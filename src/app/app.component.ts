import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private snackBar: MatSnackBar){}

  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/David_Heffron_Resume.pdf');
    link.setAttribute('download', `DavidHeffronResume.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    this.openSnackBar('Downloaded David\'s Resume.', 'Close')
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
