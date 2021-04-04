import { DomController } from './domController';

const subheading = 'Welcome to the Roboto Bistro!';
const body = document.createElement('p');
body.innerText =
  'We are a dog friendly, definitely real restaurant located in the heart of New Townsville! Come for the food, stay for the duration of your visit!';

export class WelcomePage {
  static render() {
    DomController.render(subheading, body);
  }
}
