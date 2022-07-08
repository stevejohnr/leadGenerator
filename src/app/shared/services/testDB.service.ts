import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerInfo } from 'src/app/customer-info';

@Injectable({
    providedIn: 'root'
  })
export class testDB {
    rootURL: string = '/api';

    constructor(
        private _http: HttpClient
    ){}

    async testDBWrite(customerInfo: CustomerInfo) {

    const body = JSON.stringify(customerInfo);

        return await this._http.post<CustomerInfo>('https://0qfuguiuof.execute-api.eu-west-1.amazonaws.com/writeToTable',body).toPromise().then((result) => {
        console.log(result);    
        return result;
        }).catch(error => { throw error });
    }

    testDBRead() {
        const data = [];

        const headers = { };

        return this._http.get('https://0qfuguiuof.execute-api.eu-west-1.amazonaws.com/getDataFromTable').toPromise().then((result) => {
        console.log(result);    
        return result;
        }).catch(error => { throw error });
    }
}
