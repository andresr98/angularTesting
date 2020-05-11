import { Component } from '@angular/core';
import { ConvertNumberService } from './shared/services/convert-number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Convertidor a números romanos';
  romanNumber = '';
  number = '';

  constructor(private convertNumberService: ConvertNumberService) {}

  onInputChange() {
    this.romanNumber = this.convertNumberService.convertNumberToRoman(this.number);

    if (this.romanNumber === '') {
      this.romanNumber = "El número no es valido. Los números validos van desde el 1 hasta el 1999";
    }
  }
}
