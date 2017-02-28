import { SellerSitePage } from './app.po';

describe('seller-site App', function() {
  let page: SellerSitePage;

  beforeEach(() => {
    page = new SellerSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
