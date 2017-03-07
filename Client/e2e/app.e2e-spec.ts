import { Verkefni3Page } from './app.po';

describe('verkefni3 App', () => {
  let page: Verkefni3Page;

  beforeEach(() => {
    page = new Verkefni3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
