import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Event Button 
//       (click)="onClick($event)

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navigation">
      <a href="/" class="brand-name">
        <img class="brand-logo" 
        src="assets/gradient-icon---large.gif" 
        alt="logo" aria-hidden="true">
      </a>
      <button class="hamburger" type="button">
      </button>
      <div class="navigation-menu">
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
}
