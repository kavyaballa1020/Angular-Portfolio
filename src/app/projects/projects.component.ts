import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { title: 'Project 1', description: 'A web application built with Angular.', imageUrl: '/blog.png', liveDemoLink: 'https://example.com/demo1', gitRepoLink: 'https://github.com/user/repo1' },
    { title: 'Project 3', description: 'A mobile app developed with React Native.', imageUrl: '/Resume.png', liveDemoLink: 'https://example.com/demo3', gitRepoLink: 'https://github.com/user/repo3' },
    { title: 'Project 2', description: 'A backend API developed using Node.js.', imageUrl: '/Hexa.png', liveDemoLink: 'https://hexagenius-calculator.onrender.com/', gitRepoLink: 'https://github.com/user/repo2' },
    { title: 'Project 4', description: 'A machine learning model for image classification.', imageUrl: '/Markdown.png', liveDemoLink: 'https://kav-markdown-editor.vercel.app/', gitRepoLink: 'https://github.com/user/repo4' },
    { title: 'Project 5', description: 'An e-commerce website using Django.', imageUrl: '/SmartPond.png', liveDemoLink: 'https://example.com/demo5', gitRepoLink: 'https://github.com/user/repo5' },
    { title: 'Project 6', description: 'A real-time chat application using WebSocket.', imageUrl: '/image.png', liveDemoLink: 'https://example.com/demo6', gitRepoLink: 'https://github.com/user/repo6' }
   
  ];
}
