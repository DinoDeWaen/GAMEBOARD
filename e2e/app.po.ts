import { browser, element, by } from 'protractor';

export class GAMEBOARDPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
