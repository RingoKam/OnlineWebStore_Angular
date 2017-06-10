import { TestingcliPage } from './app.po';

describe('testingcli App', () => {
  let page: TestingcliPage;

  beforeEach(() => {
    page = new TestingcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
