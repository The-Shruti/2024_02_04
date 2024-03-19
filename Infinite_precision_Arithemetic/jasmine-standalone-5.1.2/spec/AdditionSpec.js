

describe('Addition function', () => {
    it('should add two numbers correctly', () => {
        expect(Addition([1, 1], [1, 1])).toEqual(22);
        expect(Addition([5, 5, 5, 5], [9, 9, 9])).toEqual(6554);
        expect(Addition([1, 2, 3], [7, 8, 9])).toEqual(912);

    });
    it('should handle empty arrays', () => {
        expect(() => Addition([], [])).toThrowError('Invalid input. Arrays must not be empty and must contain only non-negative numbers.');
        expect(() => Addition([1, 5, 6], [])).toThrowError('Invalid input. Arrays must not be empty and must contain only non-negative numbers.');
    
     });
    it('should handle arrays with negative numbers', () => {
        expect(() => Addition([1, 5, 6], [-8, 3, -2])).toThrowError('Invalid input. Arrays must not be empty and must contain only non-negative numbers.');
    }); 

    it('should correctly handle addition of large numbers', () => {
        expect(Addition([9, 9, 9, 9, 9, 9, 9], [1])).toEqual(10000000);
    }); 

    
    it('should correctly handle addition with carry-over', () => {
        expect(Addition([9, 9, 9, 9, 9, 9, 9], [1, 1])).toEqual(10000010);
        expect(Addition([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])).toEqual(66666);
    }); 

    it('should correctly handle addition with leading zeros', () => {
        expect(Addition([0, 0, 1], [0, 0, 9])).toEqual(10);
    });
}); 