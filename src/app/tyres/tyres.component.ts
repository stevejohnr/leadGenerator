import { Component, OnInit } from '@angular/core';
import { CustomerInfo } from '../customer-info';
import { testDB } from '../shared/services/testDB.service';

@Component({
  selector: 'app-tyres',
  templateUrl: './tyres.component.html',
  styleUrls: ['./tyres.component.scss']
})
export class TyresComponent implements OnInit {

  title = 'testOneApp';

  customerInfo: CustomerInfo = new CustomerInfo;
  quotePrice: number = 0;

  chosenQuality = {quality: '', priceMultiplyer: 0};
  chosenSize = {size: '', price: 0};
  tyreQuality =  [
    {quality : 'Budget', priceMultiplyer : 0.75}, 
    {quality: 'Standard', priceMultiplyer : 1},
    {quality : 'Premium', priceMultiplyer : 1.25}];
  tyreSize = [
    {size: '225 35 R19', price : 150}, 
    {size: '195 55 R16', price : 100}, 
    {size: '215 45 R17', price : 125}];

    constructor(
      private _testDBService: testDB
  ){}

    ngOnInit(){
    }

    generatePriceByQuality(event: any){
      this.quotePrice = event.value['priceMultiplyer'] * this.chosenSize.price;
      console.log(event.value);
    }

    generatePriceBySize(event: any){
      this.quotePrice = event.value['price'] * this.chosenQuality.priceMultiplyer
      console.log(event.value);
    }

    submit(){
      this.customerInfo.quotePrice = this.quotePrice;
      this.customerInfo.businessEmail = "stevejohnr15@mail.com"
      this._testDBService.testDBWrite(this.customerInfo);
    }

}
