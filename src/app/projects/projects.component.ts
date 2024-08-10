import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { title: 'Project 1', description: 'A web application built with Angular.', imageUrl: 'public/project1.jpg', liveDemoLink: 'https://example.com/demo1', gitRepoLink: 'https://github.com/user/repo1' },
    { title: 'Project 2', description: 'A backend API developed using Node.js.', imageUrl: 'public/project2.jpg', liveDemoLink: 'https://example.com/demo2', gitRepoLink: 'https://github.com/user/repo2' },
    { title: 'Project 3', description: 'A mobile app developed with React Native.', imageUrl: 'public/project3.jpg', liveDemoLink: 'https://example.com/demo3', gitRepoLink: 'https://github.com/user/repo3' },
    { title: 'Project 4', description: 'A machine learning model for image classification.', imageUrl: 'public/project4.jpg', liveDemoLink: 'https://example.com/demo4', gitRepoLink: 'https://github.com/user/repo4' },
    { title: 'Project 5', description: 'An e-commerce website using Django.', imageUrl: 'public/project5.jpg', liveDemoLink: 'https://example.com/demo5', gitRepoLink: 'https://github.com/user/repo5' },
    { title: 'Project 6', description: 'A real-time chat application using WebSocket.', imageUrl: 'public/project6.jpg', liveDemoLink: 'https://example.com/demo6', gitRepoLink: 'https://github.com/user/repo6' },
    { title: 'Project 7', description: 'A personal finance tracker built with Vue.js.', imageUrl: 'public/project7.jpg', liveDemoLink: 'https://example.com/demo7', gitRepoLink: 'https://github.com/user/repo7' },
    { title: 'Project 8', description: 'A weather forecasting app using API integration.', imageUrl: 'public/project8.jpg', liveDemoLink: 'https://example.com/demo8', gitRepoLink: 'https://github.com/user/repo8' }
  ];
}
