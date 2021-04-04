import { DomController } from './domController';
import Phone from './assets/phone.jpg';

export class Booking {
  static render() {
    const subheading = 'Book a table!';
    DomController.render(subheading, Booking._getBody());
  }

  static _getBody() {
    const body = document.createElement('DIV');
    const phoneImage = new Image();
    phoneImage.src = Phone;
    phoneImage.className = 'imageInBox';

    const paragraph = document.createElement('p');
    paragraph.innerText = `We currently only accept bookings for parties of over 8 people.
      Give us a call on +44 1632 960749 to arrange.`;
    body.appendChild(phoneImage);
    body.appendChild(paragraph);
    return body;
  }
}
