import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite("bbb", "vvvv", "ggg", "ffff", true)).toBeTruthy();
  });
});
