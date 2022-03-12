import { DomainNamePipe } from './domain-name.pipe';

describe('DomainNamePipe', () => {
  it('create an instance', () => {
    const pipe = new DomainNamePipe();
    expect(pipe).toBeTruthy();
  });

  it("should return the domain from http url ", () => {
    const pipe = new DomainNamePipe();
    const url = "http://test.amazing.com/test1/test2";
    expect(pipe.transform(url)).toBe("(test.amazing.com)");
  });

  it("should return the domain from https url ", () => {
    const pipe = new DomainNamePipe();
    const url = "https://amazing.com/test1/test2?44545&3434";
    expect(pipe.transform(url)).toBe("(amazing.com)");
  });

  it("should return the domain from invalid url ", () => {
    const pipe = new DomainNamePipe();
    const url = undefined;
    expect(pipe.transform(url)).toBe("");
  });

});

