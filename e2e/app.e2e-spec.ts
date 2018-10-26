import { nys-web-devPage } from './app.po';

describe('nys-web-dev App', () => {
  let page: nys-web-devPage;

  beforeEach(() => {
    page = new nys-web-devPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
