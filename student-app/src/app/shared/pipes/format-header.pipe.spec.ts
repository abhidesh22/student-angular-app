import { FormatHeaderPipe } from './format-header.pipe';

describe('FormatHeaderPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatHeaderPipe();
    expect(pipe).toBeTruthy();
  });

  it("should give header formatting correctly", () => {
    const pipe = new FormatHeaderPipe();

    const formattedHeader = pipe.transform("      Tst 111 ");
    expect(formattedHeader).toBe('TST 111');
  });

  it("should give empty string for undefined header", () => {
    const pipe = new FormatHeaderPipe();
  
    const formattedHeader = pipe.transform(undefined);
    expect(formattedHeader).toBe('');
  });

});
