import { DomController } from './domController';

const subheading = 'Welcome to the Roboto Bistro!';

export class WelcomePage {
  static render() {
    DomController.resetHTML();
    DomController.drawLogo();
    DomController.addHTML(`<h2>${subheading}</h2>`);
    DomController.addLine();
    DomController.addNav();
  }
}
