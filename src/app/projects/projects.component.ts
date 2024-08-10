import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Define the projects property with the link
  projects = [
    { title: 'Project 1', description: 'A web application built with Angular.', imageUrl: '/blog.png', link: 'https://example.com/project1' },
    { title: 'Project 2', description: 'A backend API developed using Node.js.', imageUrl: '/Hexa.png', link: 'https://example.com/project2' },
    // Add more projects as needed
  ];
}
