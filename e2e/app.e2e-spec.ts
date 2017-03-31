import { TrinityAppPage } from './app.po';

describe('trinity-app App', () => {
  let page: TrinityAppPage;

  beforeEach(() => {
    page = new TrinityAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
