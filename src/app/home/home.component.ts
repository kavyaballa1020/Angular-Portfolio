import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Message to display on the home page
  welcomeMessage: string = 'Welcome to My Portfolio';
  subMessage: string = 'Discover my work, skills, and projects.';

  // Method to scroll to a specific section of the page
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
