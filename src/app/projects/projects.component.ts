import { Component } from '@angular/core';
import { trigger, transition, style, animate, query } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          animate('0.5s', style({ opacity: 1, transform: 'translateY(0)' }))
        ], { optional: true })
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    { title: 'Blog App', description: 'The blog app, built with React, enables multiple users to log in, create, edit, and delete their posts. It provides a dynamic platform for user-generated content management with an intuitive interface.', imageUrl: '/blog.png', liveDemoLink: 'https://blog-app-node-76lm.onrender.com/', gitRepoLink: 'https://github.com/kavyaballa1020/Blog-App-Node.git' },
    { title: 'Resume Builder', description: 'This React JS web application lets users create and customize two resume designs. The dynamic interface updates content in real-time, offering a polished and professional resume crafting experience.', imageUrl: '/Resume.png', liveDemoLink: 'https://rb-react.vercel.app/', gitRepoLink: 'https://github.com/kavyaballa1020/Resume-Builder-React.git' },
    { title: 'HexaGenius Calculator', description: 'This is a user-friendly Number System Calculator web application. It allows you to effortlessly convert numbers between different number systems, including Decimal, Binary, Octal, and Hexadecimal.', imageUrl: '/Hexa.png', liveDemoLink: 'https://hexagenius-calculator.onrender.com/', gitRepoLink: 'https://github.com/kavyaballa1020/HexaGenius-Calculator.git' },
    { title: 'Markdown Editor', description: 'A React-based Markdown editor that allows users to write Markdown code on the left side and instantly see the rendered output on the right side. This interactive tool provides a seamless experience for editing and previewing Markdown content.', imageUrl: '/Markdown.png', liveDemoLink: 'https://kav-markdown-editor.vercel.app/', gitRepoLink: 'https://github.com/kavyaballa1020/Markdown-Editor-React.git' },
    { title: 'Smart Pond Monitoring System', description: 'The Smart Pond Monitoring System is an IoT-based web application that allows users to remotely monitor various pond parameters such as pH levels, water temperature, and water levels. It provides real-time data and insights for effective pond management and maintenance.', imageUrl: '/SmartPond.png', liveDemoLink: 'https://github.com/kavyaballa1020/Smart-Pond-Monitoring-IoT.git', gitRepoLink: 'https://github.com/kavyaballa1020/Smart-Pond-Monitoring-IoT.git' },
    { title: 'Image Gallery', description: 'The image gallery is a responsive web component that automatically slides through multiple images when the "video on" button is clicked, with navigation options for next and previous images. It’s designed to adjust seamlessly to various screen sizes for a consistent viewing experience.', imageUrl: '/image.png', liveDemoLink: 'https://kav-image-gallery.vercel.app/', gitRepoLink: 'https://github.com/kavyaballa1020/CodeAlpha_ImageGallery.git' }
   
  ];
}
