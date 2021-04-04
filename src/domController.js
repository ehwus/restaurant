import Logo from './assets/logo.png';
import { WelcomePage } from './welcomePage';

const container = document.getElementById('container');

export class DomController {
  static drawLogo() {
    const logo = new Image();
    logo.src = Logo;
    logo.className = 'logo';
    container.appendChild(logo);
  }

  static addHTML(html) {
    container.innerHTML += html;
  }

  static resetHTML() {
    container.innerHTML = '';
  }

  static addLine() {
    container.innerHTML += '<hr />';
  }

  static _getRoutes() {
    return [{ name: 'HOME', element: WelcomePage }];
  }

  static addSubheading(subheading) {
    const newSubheading = document.createElement('h2');
    newSubheading.className = 'subheading';
    newSubheading.innerHTML = subheading;
    container.appendChild(newSubheading);
  }

  static addNav() {
    const navBar = document.createElement('ul');
    navBar.className = 'navBar';
    DomController._getRoutes().forEach((route) => {
      const link = document.createElement('li');
      link.className = 'navBarLink';
      link.innerHTML = route.name;
      link.addEventListener('click', () => {
        route.element.render();
      });
      navBar.appendChild(link);
    });
    container.appendChild(navBar);
  }
}
