describe('Multiplication function', () => {
    it('should correctly multiply two single-digit numbers', () => {
      expect(multiplication([3], [1, 2])).toEqual('36');
    });
  
    it('should correctly multiply two multi-digit numbers', () => {
      expect(multiplication([2, 5, 9], [1, 9, 4, 0])).toEqual('502460');
    });
  
    it('should correctly multiply a number with zero', () => {
      expect(multiplication([0, 0, 0], [0, 0])).toEqual('0');
    });
  
    it('should correctly multiply numbers that result in carrying over', () => {
      expect(multiplication([7, 5, 9], [1, 8, 5])).toEqual('140415');
    });
  
    it('should correctly multiply large numbers with multiple digits', () => {
      expect(multiplication([3, 7, 5, 9, 2, 1], [6, 8, 0, 2])).toEqual('2557014642');
    });
  
    it('should throw error for empty input', () => {
      expect(() => multiplication([-3, 7, 1], [])).toThrow();
    });
  
  });