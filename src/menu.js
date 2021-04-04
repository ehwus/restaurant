import { DomController } from './domController';
import Chef from './assets/chef.jpg';

export class Menu {
  static render() {
    const subheading = 'Our Delicious Food!';
    DomController.render(subheading, Menu._getBody());
  }

  static _getBody() {
    const body = document.createElement('div');
    const chefImage = new Image();
    chefImage.src = Chef;
    chefImage.className = 'imageInBox';
    body.appendChild(chefImage);

    const paragraph = document.createElement('p');
    paragraph.innerText = `Our menu changes daily, depending what's available in the market.
      We always ensure we're suitable for any dietary requirements!`;
    body.appendChild(paragraph);

    return body;
  }
}
