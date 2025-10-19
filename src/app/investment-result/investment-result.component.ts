import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, input, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [NgIf , NgFor , CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {

  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultData!;
  }

  get hasResults() {
    return this.investmentService.resultData && this.investmentService.resultData.length > 0;
  }
}
