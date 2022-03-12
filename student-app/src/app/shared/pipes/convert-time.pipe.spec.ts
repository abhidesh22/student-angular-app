import { ConvertTimePipe } from './convert-time.pipe';
import * as moment from "moment";

describe('ConvertTimePipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertTimePipe();
    expect(pipe).toBeTruthy();
  });

  it("should give time conversion for unix time", () => {
    const pipe = new ConvertTimePipe();

    const convertedTime = pipe.transform(1644204798);
    expect(convertedTime).toBe(moment(1644204798 * 1000).fromNow());
  });

  it("should give empty string for unix time as undefined", () => {
    const pipe = new ConvertTimePipe();
  
    const convertedTime = pipe.transform(undefined);
    expect(convertedTime).toBe('');
  });

});
