import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../invesment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>();
  constructor(private investmentService : InvestmentService) {}
  calculate = output<InvestmentInput>();

  entredInitialInvestment = signal('0');
  entredDuration = signal('0');
  entredExpectedReturn = signal('0');
  entredAnnualInvestment = signal('0');

  onSubmit() {

    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.entredInitialInvestment(),
      annualInvestment: +this.entredAnnualInvestment(),
      duration: +this.entredDuration(),
      expectedReturn: +this.entredExpectedReturn(),
    });
  }
}
