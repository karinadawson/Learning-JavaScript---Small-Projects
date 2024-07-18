const fizzBuzz = require ("./fizzBuzz")

describe('fizzBuzz', () => {
    it('returns fizz for 6', () => {
        expect(fizzBuzz(6)).toBe('Fizz')
    });
    it('returns fizz for 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    });
    it('returns buzz for 10', () => {
        expect(fizzBuzz(10)).toBe('Buzz')
    });
    it('returns fizzbuzz for 15', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    });
    it('returns num for 7', () => {
        expect(fizzBuzz(7)).toBe(7)
    });
});