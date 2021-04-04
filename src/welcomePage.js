import { DomController } from './domController';

const subheading = 'Welcome to the Roboto Bistro!';

export class WelcomePage {
  static render() {
    DomController.resetHTML();
    DomController.drawLogo();
    DomController.addSubheading(subheading);
    DomController.addLine();
    DomController.addNav();
  }
}
