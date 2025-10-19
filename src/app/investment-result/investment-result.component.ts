import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: false,
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
