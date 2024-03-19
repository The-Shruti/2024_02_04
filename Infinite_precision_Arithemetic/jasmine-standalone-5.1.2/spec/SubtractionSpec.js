describe('Subtraction function', () => {
    it('should correctly subtract two positive numbers', () => {
      expect(subtraction([1], [6, 0])).toEqual('-59');
      expect(subtraction([4, 6, 2], [1, 7, 4, 2])).toEqual('-1280'); 
      console.log(subtraction([4, 6, 2], [1, 7, 4, 2]));
   
    });
  
    it('should throw error for invalid inputs', () => {
      expect(() => subtraction([], [4, 8, 2])).toThrow();
      expect(() => subtraction([1, 2], [-3])).toThrow();
    });  

    it('should handle empty arrays', () => {
        expect(() => subtraction([], [])).toThrowError('Invalid input. Arrays must not be empty and must contain only non-negative numbers.');

    }); 

    it('should handle arrays with negative numbers', () => {
        expect(() => subtraction([1, -5, 6], [-5, 3, 2])).toThrowError('Invalid input. Arrays must not be empty and must contain only non-negative numbers.');
    }); 

    it('should correctly handle subtraction with borrow', () => {
        expect(subtraction([3, 6, 1, 2, 3, 9, 3], [6, 3, 1, 2, 8, 5, 2])).toEqual('-2700459');
    }); 

    it('should correctly subtract two multi-digit positive numbers', () => {
        expect(subtraction([7, 8, 9], [1, 1, 8, 5])).toEqual('-0396');
    });
  });