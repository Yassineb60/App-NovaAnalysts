import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements AfterViewInit {

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
        }
      });
    });

    const partnersImage = document.querySelector('.partners-image');
    if (partnersImage) observer.observe(partnersImage);
  }

  bookDemo() {
    alert('Thanks for contacting us! We’ll get back to you soon.');
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  contact = {
    name: '',
    email: '',
    message: ''
  };

  saveContactMessage() {
    this.http.post('http://localhost:3000/api/contact', this.contact)
      .subscribe({
        next: () => {
          alert('Message sent to backend!');
          this.contact = { name: '', email: '', message: '' };
        },
        error: () => alert('Error sending message.')
      });
  }
}
