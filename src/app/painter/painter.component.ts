import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerInfo } from '../customer-info';
import { testDB } from '../shared/services/testDB.service';

@Component({
  selector: 'app-painter',
  templateUrl: './painter.component.html',
  styleUrls: ['./painter.component.scss']
})
export class PainterComponent implements OnInit {

  title = 'testOneApp';

  customerInfo: CustomerInfo = new CustomerInfo;
  quotePrice: number = 0;
  area: number = 0;
  pricePerSquareMetre: number = 10;
  supplyPaint: boolean = false;;

  ChosenEnvironment = {location: 'Interior', pricepriceMultiplyer : 1};
  environments = [
    {location: 'Interior', pricepriceMultiplyer : 1}, 
    {location: 'Exterior', pricepriceMultiplyer : 1.2}];

    constructor(
      private _testDBService: testDB,
      private router: Router
  ){}

    ngOnInit(){
    }

    updateEnvironment(event: any){
      this.ChosenEnvironment = event.value;
      this.generatePrice();
    }

    updateSupplyPaint(event: any){
      this.supplyPaint = event.checked;
      this.generatePrice();
    }

    generatePrice(){
      var areaPrice = this.area*this.pricePerSquareMetre;
      if(this.supplyPaint)
        areaPrice += this.area*3;
      this.quotePrice = areaPrice*this.ChosenEnvironment.pricepriceMultiplyer;
    }

    submit(){
      this.customerInfo.quotePrice = this.quotePrice;
      this.customerInfo.extraInfo = 
        {
          "area" : this.area,
          "environment" : this.ChosenEnvironment.location,
          "supplyPaint" : this.supplyPaint ? "yes" : "no"
        }
      this.customerInfo.businessEmail = "stevejohnr@gmail.com"
      const response = this._testDBService.testDBWrite(this.customerInfo);
      this.router.navigate(['/response']);
    }
}
