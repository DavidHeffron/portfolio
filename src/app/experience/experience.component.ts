import { Component } from '@angular/core';
import { Experience } from './experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Experience[] = []

  constructor(){
    this.experiences = [
      {name: 'West Chester University', startDate: 'August 2019', endDate: 'December 2022', image: 'assets/images/WCU-logo.png', title: 'Undergrad Student', icon: 'assets/images/gradCap.svg',
      description: 'I attended WCU for 3.5 years. During the course of my time there, I made Dean\'s list 6/7 semesters. I also was a recipient of the WCU Golden Ram Award, and Academic Excellence Scholarships.'
      },
      {name: 'HCL Technologies', startDate: 'May 2022', endDate: 'August 2022', image: 'assets/images/HCL-Technologies.png', title: 'Software Engineer Intern', icon: 'assets/images/workIcon.png',
      description: 'During my time as a frontend developer at HCL Technologies, I had the privilege of working with React, a cutting-edge JavaScript library, to create dynamic and user-friendly web applications. Collaborating with a talented team, I leveraged my expertise in React to develop responsive and high-performance web solutions that met our clients\' needs.'
      },
      {name: 'L3 Harris', startDate: 'July 2023', endDate: 'Current', image: 'assets/images/L3Harris.png', title: 'Associate Software Engineer', icon: 'assets/images/workIcon.png',
      description: 'At L3 Harris, I am helping develop an Angular app to construct a comprehensive catalog of company metadata, aimed at driving efficiency and substantial cost savings. This innovative application will streamline the management and accessibility of critical data, fostering better collaboration and data consistency, which will result in significant savings while enhancing operational effectiveness.'
      }

    ]
  }
}
