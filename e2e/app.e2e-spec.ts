import { ProyectoBuildSystemsPage } from './app.po';

describe('proyecto-build-systems App', function() {
  let page: ProyectoBuildSystemsPage;

  beforeEach(() => {
    page = new ProyectoBuildSystemsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
