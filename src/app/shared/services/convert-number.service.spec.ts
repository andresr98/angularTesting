import { TestBed } from '@angular/core/testing';

import { ConvertNumberService } from './convert-number.service';

describe('ConvertNumberService', () => {
  let service: ConvertNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not convert 0 (zero) to a roman number', () => {
    const stringZero = '0';
    const expectedString = '';
    const romanNumber = service.convertNumberToRoman(stringZero);
    expect(romanNumber).toBe(expectedString);
  });

  it('should not convert an empty string to a roman number', () => {
    const emptyString = '';
    const expectedString = '';
    const romanNumber = service.convertNumberToRoman(emptyString);
    expect(romanNumber).toBe(expectedString);
  });

  it('should not convert an space string to a roman number', () => {
    const spaceString = '';
    const expectedString = '';
    const romanNumber = service.convertNumberToRoman(spaceString);
    expect(romanNumber).toBe(expectedString);
  });

  it('should not convert a number greater than 1999 to a roman number', () => {
    const stringTwothousand = '2000';
    const expectedString = '';
    const romanNumber = service.convertNumberToRoman(stringTwothousand);
    expect(romanNumber).toBe(expectedString);
  });

  it('should not convert a number lower than 0 (zero) to a roman number', () => {
    const stringNegativeOne = '-1';
    const expectedString = '';
    const romanNumber = service.convertNumberToRoman(stringNegativeOne);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 1 to roman number I', () => {
    const stringOne = '1';
    const expectedString = 'I';
    const romanNumber = service.convertNumberToRoman(stringOne);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 2 to roman number II', () => {
    const stringTwo = '2';
    const expectedString = 'II';
    const romanNumber = service.convertNumberToRoman(stringTwo);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 3 to roman number III', () => {
    const stringThree = '3';
    const expectedString = 'III';
    const romanNumber = service.convertNumberToRoman(stringThree);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 4 to roman number IV', () => {
    const stringFour = '4';
    const expectedString = 'IV';
    const romanNumber = service.convertNumberToRoman(stringFour);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 5 to roman number V', () => {
    const stringFive = '5';
    const expectedString = 'V';
    const romanNumber = service.convertNumberToRoman(stringFive);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 6 to roman number VI', () => {
    const stringSix = '6';
    const expectedString = 'VI';
    const romanNumber = service.convertNumberToRoman(stringSix);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 6 to roman number VI', () => {
    const stringSix = '6';
    const expectedString = 'VI';
    const romanNumber = service.convertNumberToRoman(stringSix);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 7 to roman number VII', () => {
    const stringSeven = '7';
    const expectedString = 'VII';
    const romanNumber = service.convertNumberToRoman(stringSeven);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 8 to roman number VIII', () => {
    const stringEight = '8';
    const expectedString = 'VIII';
    const romanNumber = service.convertNumberToRoman(stringEight);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 9 to roman number IX', () => {
    const stringNine = '9';
    const expectedString = 'IX';
    const romanNumber = service.convertNumberToRoman(stringNine);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 10 to roman number X', () => {
    const stringTen = '10';
    const expectedString = 'X';
    const romanNumber = service.convertNumberToRoman(stringTen);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 20 to roman number XX', () => {
    const stringTwenty = '20';
    const expectedString = 'XX';
    const romanNumber = service.convertNumberToRoman(stringTwenty);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 30 to roman number XXX', () => {
    const stringThirty = '30';
    const expectedString = 'XXX';
    const romanNumber = service.convertNumberToRoman(stringThirty);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 40 to roman number XL', () => {
    const stringForty = '40';
    const expectedString = 'XL';
    const romanNumber = service.convertNumberToRoman(stringForty);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 50 to roman number L', () => {
    const stringFifty = '50';
    const expectedString = 'L';
    const romanNumber = service.convertNumberToRoman(stringFifty);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 60 to roman number LX', () => {
    const stringSixty = '60';
    const expectedString = 'LX';
    const romanNumber = service.convertNumberToRoman(stringSixty);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 70 to roman number LXX', () => {
    const stringSeventy = '70';
    const expectedString = 'LXX';
    const romanNumber = service.convertNumberToRoman(stringSeventy);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 80 to roman number LXXX', () => {
    const stringEighty = '80';
    const expectedString = 'LXXX';
    const romanNumber = service.convertNumberToRoman(stringEighty);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 90 to roman number XC', () => {
    const stringNinety = '90';
    const expectedString = 'XC';
    const romanNumber = service.convertNumberToRoman(stringNinety);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 100 to roman number C', () => {
    const stringOneHundred = '100';
    const expectedString = 'C';
    const romanNumber = service.convertNumberToRoman(stringOneHundred);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 200 to roman number CC', () => {
    const stringTwoHundred = '200';
    const expectedString = 'CC';
    const romanNumber = service.convertNumberToRoman(stringTwoHundred);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 300 to roman number CCC', () => {
    const stringThreeHundred = '300';
    const expectedString = 'CCC';
    const romanNumber = service.convertNumberToRoman(stringThreeHundred);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 400 to roman number CD', () => {
    const stringFourHundred = '400';
    const expectedString = 'CD';
    const romanNumber = service.convertNumberToRoman(stringFourHundred);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 500 to roman number D', () => {
    const stringFiveHundred = '500';
    const expectedString = 'D';
    const romanNumber = service.convertNumberToRoman(stringFiveHundred);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 600 to roman number DC', () => {
    const stringSixHundred = '600';
    const expectedString = 'DC';
    const romanNumber = service.convertNumberToRoman(stringSixHundred);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 700 to roman number DCC', () => {
    const stringSevenHundred = '700';
    const expectedString = 'DCC';
    const romanNumber = service.convertNumberToRoman(stringSevenHundred);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 800 to roman number DCCC', () => {
    const stringEightHundred = '800';
    const expectedString = 'DCCC';
    const romanNumber = service.convertNumberToRoman(stringEightHundred);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 900 to roman number CM', () => {
    const stringNineHundred = '900';
    const expectedString = 'CM';
    const romanNumber = service.convertNumberToRoman(stringNineHundred);
    expect(romanNumber).toBe(expectedString);
  });

  it('should convert number 1000 to roman number M', () => {
    const stringOneThousand = '1000';
    const expectedString = 'M';
    const romanNumber = service.convertNumberToRoman(stringOneThousand);
    expect(romanNumber).toBe(expectedString);
  });
});
