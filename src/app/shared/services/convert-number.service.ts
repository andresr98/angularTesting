import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertNumberService {

  constructor() { }

  convertNumberToRoman(number) : string {
    const maxValue = 1999;
    const minValue = 1;

    if (isNaN(number)) {
      return '';
    }

    let actualNumber = parseInt(number);

    if (actualNumber > maxValue) {
      return '';
    }

    if (actualNumber < minValue) {
      return '';
    }

    const units = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    if (actualNumber < 10) {
      return units[actualNumber -1 ];
    }
    const tens = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const hundreds = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const thousands = ['M'];

    const ten = 10;
    const hundred = 100;
    const thousand = 1000;
    const backwardPosition = 1
    let result = '';

    do {

      if (actualNumber >= thousand) {
        result += thousands[Math.floor((actualNumber / thousand)) - backwardPosition];
        actualNumber = actualNumber % thousand;
      } else if (actualNumber >= hundred) {
        result += hundreds[Math.floor((actualNumber / hundred)) - backwardPosition];
        actualNumber = actualNumber % hundred;
      } else if (actualNumber >= ten) {
        result += tens[Math.floor((actualNumber / ten)) - backwardPosition];
        actualNumber = actualNumber % ten;
      }

    } while (actualNumber >= ten)

    if (actualNumber !== 0) {
      result += units[actualNumber - backwardPosition];
    }

    return result;

  }
}
