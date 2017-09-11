import { TrimCityNamePipe } from './trim-city-name.pipe';

describe('TrimCityNamePipe', () => {
  it('create an instance', () => {
    const pipe = new TrimCityNamePipe();
    expect(pipe).toBeTruthy();
  });
});
