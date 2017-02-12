import { GAMEBOARDPage } from './app.po';

describe('gameboard App', function() {
  let page: GAMEBOARDPage;

  beforeEach(() => {
    page = new GAMEBOARDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
