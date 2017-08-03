import { SnippetsPage } from './app.po';

describe('snippets App', () => {
  let page: SnippetsPage;

  beforeEach(() => {
    page = new SnippetsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
