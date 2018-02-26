import { Render2Page } from './app.po';

describe('render2 App', function() {
  let page: Render2Page;

  beforeEach(() => {
    page = new Render2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
