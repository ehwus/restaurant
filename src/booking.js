import { DomController } from './domController';

const subheading = 'Book a table!';
const body = document.createElement('p');
body.innerText = 'Booking Test';

export class Booking {
  static render() {
    DomController.render(subheading, body);
  }
}
