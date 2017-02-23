import { NotesDeltaPage } from './app.po';

describe('notes-delta App', function() {
  let page: NotesDeltaPage;

  beforeEach(() => {
    page = new NotesDeltaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
