import { TeamWorkPage } from './app.po';

describe('team-work App', function() {
  let page: TeamWorkPage;

  beforeEach(() => {
    page = new TeamWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
