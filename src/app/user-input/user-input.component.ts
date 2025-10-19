import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../invesment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  userInput: InvestmentInput = {
    initialInvestment: 0,
    duration: 0,
    expectedReturn: 0,
    annualInvestment: 0,
  };

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.userInput.initialInvestment,
      duration: +this.userInput.duration,
      expectedReturn: +this.userInput.expectedReturn,
      annualInvestment: +this.userInput.annualInvestment,
    });
  }
}
