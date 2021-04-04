import { DomController } from './domController';

const subheading = 'Our Delicious Food!';
const body = document.createElement('p');
body.innerText = 'Menu Test';

export class Menu {
  static render() {
    DomController.render(subheading, body);
  }
}
