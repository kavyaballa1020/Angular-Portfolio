import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Define the projects property
  projects = [
    { title: 'Project 1', description: 'A web application built with Angular.', imageUrl: 'assets/project1.jpg' },
    { title: 'Project 2', description: 'A backend API developed using Node.js.', imageUrl: 'assets/project2.jpg' },
    // Add more projects as needed
  ];
}
