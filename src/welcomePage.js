import { DomController } from './domController';
import Burger from './assets/burger.jpg';

export class WelcomePage {
  static render() {
    const subheading = 'Welcome to the Roboto Bistro!';
    console.log(WelcomePage._getBody());
    DomController.render(subheading, WelcomePage._getBody());
  }

  static _getBody() {
    const body = document.createElement('div');
    const burgerImage = new Image();
    burgerImage.src = Burger;
    burgerImage.className = 'imageInBox';
    const paragraph = document.createElement('p');
    paragraph.innerText = `We are a dog friendly, definitely real restaurant located in the heart of New Townsville!
      Come for the food, stay for the duration of your visit!`;
    body.appendChild(burgerImage);
    body.appendChild(paragraph);
    return body;
  }
}
