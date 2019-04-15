import foursquare from "./foursquare";
describe('Sum of Four Square between 1 to 200', () => {
  it('should return 0, 0, 0, 1 given input is 1', () => {
      expect(foursquare(1)).toEqual([0, 0, 0, 1]);
  });

  it('should return 0,0,1,1 given input is 2', () => {
    expect(foursquare(2)).toEqual([0,0,1,1]);
  });

  it('should return 0,1,1,1 given input is 3', () => {
    expect(foursquare(3)).toEqual([0,1,1,1]);
  });

  it('should return 0,0,0,2 given input is 4', () => {
    expect(foursquare(4)).toEqual([0,0,0,2]);
  });

  it('should return 0,0,1,2 given input is 5', () => {
    expect(foursquare(5)).toEqual([0,0,1,2]);
  });

  it('should return 1,1,1,2 given input is 7', () => {
    expect(foursquare(7)).toEqual([1,1,1,2]);
  });

  it('should return 5,2,1,1 given input is 31', () => {
    expect(foursquare(31)).toEqual([1,1,2,5]);
  });

});
