import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
      </header>
      <section class="content">
        <app-nav></app-nav>
      </section>
      <body>
      <div className="container">
      <article>
        <h1>An Angular World</h1>
        <p>Created using Angular CLI and Typescript, some of the key features of personal site include standalone components and routes. For the React version of the site, click here.  </p>
        <img class="ng-logo"src="/assets/gradient-icon---large.gif" 
        alt="logo" aria-hidden="true"/>
      </article>
    </div>
      </body>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [NavComponent]
})
export class AppComponent {
  title = 'nav';
}
