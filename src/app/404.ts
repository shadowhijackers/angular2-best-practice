import {Component} from '@angular/core';
import {APPName} from './config';

const templateHTML = `
 <main class="sh-u-full-height">
    <h1 style="position: absolute;right: 0;" class="sh-theme-primary sh-display-2 sh-u-text-align-right sh-u-p-8">{{ appName }}</h1>
    <article style="display: flex;flex-flow: column; justify-content: center; align-items: center; height: 100%">
          <h1 class="sh-theme-primary sh-display-4 sh-u-text-align-center sh-u-m-8">404</h1>
          <h2 class="sh-theme-accent sh-display-2  sh-u-text-align-center sh-u-m-8"> Page Not Found</h2>
    </article>
 </main>
`;

@Component({
  selector: 'app-not-found',
  template: templateHTML,
  styles: []
})
export class NotFoundComponent {

  @APPName()
  appName: string;

}
