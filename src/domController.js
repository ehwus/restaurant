import Logo from './assets/logo.png';

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
}
