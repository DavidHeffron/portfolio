import { Component } from '@angular/core';
import { Experience } from './experience';
import { ExperienceDialogComponent } from '../experience-dialog/experience-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Experience[] = []

  constructor(private dialog: MatDialog){
    this.experiences = [
      {name: 'West Chester University', startDate: 'August 2019', endDate: 'December 2022', image: 'assets/images/WCU-logo.png', title: 'Undergrad Student', icon: 'assets/images/gradCap.svg',
      description: 'I attended WCU for 3.5 years. During the course of my time there, I made Dean\'s list 6/7 semesters. I also was a recipient of the WCU Golden Ram Award, and Academic Excellence Scholarships.',
      descriptionPoints: [
      'Achieved Dean\'s List recognition for six out of seven semesters at West Chester University, demonstrating consistent academic excellence.',
      'Graduated a semester ahead of schedule, showcasing strong commitment and dedication to academic success.',
      'Earned and maintained both the Academic Excellence Scholarship and Golden Ram Scholarship throughout my education, reflecting a strong commitment to learning and achievement.',
      'Completed a rigorous curriculum with a focus on software engineering, including foundational programming courses, data structures and algorithms, software engineering, big data engineering, iOS app development, computer security, and frontend development.',
      'Active participation in the Computer Science Club, regularly attending meetings to engage with guest speakers, solve coding challenges, and further my understanding of the field.']  
      },
      {name: 'HCL Technologies', startDate: 'May 2022', endDate: 'August 2022', image: 'assets/images/HCL-Technologies.png', title: 'Software Engineer Intern', icon: 'assets/images/workIcon.png',
      description: 'During my time as a frontend developer at HCL Technologies, I had the privilege of working with React, a cutting-edge JavaScript library, to create dynamic and user-friendly web applications. Collaborating with a talented team, I leveraged my expertise in React to develop responsive and high-performance web solutions that met our clients\' needs.',
      descriptionPoints: [
        'Built dynamic webpages with React components following best practices guidelines.',
        'Participated in daily meetings to facilitate discussion of strategies, solutions, and improvements.',
        'Collaborated with peer software engineers to develop and implement software solutions.',
        'Analyzed and debugged existing code to identify and fix software issues.',
        'Constructed API calls from frontend code to communicate with backend services.',
        'Looked for ways to increase team efficiency through tooling or workflow enhancements.'
      ]
      },
      {name: 'L3 Harris', startDate: 'July 2023', endDate: 'Current', image: 'assets/images/L3Harris.png', title: 'Associate Software Engineer', icon: 'assets/images/workIcon.png',
      description: 'At L3 Harris, I am helping develop an Angular app to construct a comprehensive catalog of company metadata, aimed at driving efficiency and substantial cost savings. This innovative application will streamline the management and accessibility of critical data, fostering better collaboration and data consistency, which will result in significant savings while enhancing operational effectiveness.',
      descriptionPoints: [
        'Utilized Angular framework to create a dynamic and responsive web application, enhancing user interaction and data visualization.',
        'Worked on enhancing user interfaces and improving user experience through Angular components, services, and modules.',
        'Implemented best practices in software development, including version control, code reviews, and testing procedures to ensure high-quality code.',
        'Participated in agile development methodologies to adapt to changing project requirements and ensure project success.',
        'Contributed to solving technical challenges and optimizing application performance, working with a team of dedicated professionals.',
        'Demonstrated strong problem-solving skills and a deep understanding of web development principles in an Angular context.'
      ]
      }
    ]
  }

  openDialog(experience: Experience): void {
    const dialogRef = this.dialog.open(ExperienceDialogComponent, {
      panelClass: 'dialog-backdrop',
      data: {experience: experience}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
