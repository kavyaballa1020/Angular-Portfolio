import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { title: 'Blog App', description: 'The blog app, built with React, enables multiple users to log in, create, edit, and delete their posts. It provides a dynamic platform for user-generated content management with an intuitive interface.', imageUrl: '/blog.png', liveDemoLink: 'https://example.com/demo1', gitRepoLink: 'https://github.com/user/repo1' },
    { title: 'Resume Builder', description: 'This React JS web application lets users create and customize two resume designs. The dynamic interface updates content in real-time, offering a polished and professional resume crafting experience.', imageUrl: '/Resume.png', liveDemoLink: 'https://example.com/demo3', gitRepoLink: 'https://github.com/user/repo3' },
    { title: 'HexaGenius Calculator', description: 'This is a user-friendly Number System Calculator web application. It allows you to effortlessly convert numbers between different number systems, including Decimal, Binary, Octal, and Hexadecimal.', imageUrl: '/Hexa.png', liveDemoLink: 'https://hexagenius-calculator.onrender.com/', gitRepoLink: 'https://github.com/user/repo2' },
    { title: 'Markdown Editor', description: 'A React-based Markdown editor that allows users to write Markdown code on the left side and instantly see the rendered output on the right side. This interactive tool provides a seamless experience for editing and previewing Markdown content.', imageUrl: '/Markdown.png', liveDemoLink: 'https://kav-markdown-editor.vercel.app/', gitRepoLink: 'https://github.com/user/repo4' },
    { title: 'Smart Pond Monitoring System', description: 'The Smart Pond Monitoring System is an IoT-based web application that allows users to remotely monitor various pond parameters such as pH levels, water temperature, and water levels. It provides real-time data and insights for effective pond management and maintenance.', imageUrl: '/SmartPond.png', liveDemoLink: 'https://example.com/demo5', gitRepoLink: 'https://github.com/user/repo5' },
    { title: 'Image Gallery', description: 'The image gallery is a responsive web component that automatically slides through multiple images when the "video on" button is clicked, with navigation options for next and previous images. It’s designed to adjust seamlessly to various screen sizes for a consistent viewing experience.', imageUrl: '/image.png', liveDemoLink: 'https://example.com/demo6', gitRepoLink: 'https://github.com/user/repo6' }
   
  ];
}
