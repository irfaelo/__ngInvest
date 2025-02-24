import { Component , Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { InvestmentInput } from '../inv.model';

interface InvestmentDetails {
  InitialInvestment: number;
  Duration: number;
  ExpectedReturn: number;
  AnnualInvestment: number;
}

@Component({
  selector: 'app-user-input',
  imports:  [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
}) 
export class UserInputComponent { 
  @Output() calculate = new EventEmitter<InvestmentInput>();
 

  investment:InvestmentDetails;
 

 constructor(){
 
    this.investment = {
      InitialInvestment: 0,
      Duration: 0,
      ExpectedReturn:0,
      AnnualInvestment:  0
    };;
 }

  //variables de entrada
  enteredInitialInvestment: number = 0;
  enteredDuration: number = 0;
  enteredExpectedReturn: number = 0;
  enteredAnnualInvestment: number = 0;
 


  
 

  onSubmit(){  

    /*
    this.investment = {
      InitialInvestment: this.enteredInitialInvestment,
      Duration: this.enteredDuration,
      ExpectedReturn: this.enteredExpectedReturn,  
      AnnualInvestment: this.enteredAnnualInvestment,
    };

    console.log( this.investment) */

    
    this.calculate.emit({
      initialInvestment: Number(this.enteredInitialInvestment),
      annualInvestment: Number(this.enteredAnnualInvestment),
      expectedReturn: Number(this.enteredExpectedReturn),
      duration: Number(this.enteredDuration),
    });
  }

}
