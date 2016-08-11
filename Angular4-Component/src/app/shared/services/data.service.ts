import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ICustomer } from '../interfaces';

@Injectable()
export class DataService {
  
    _baseUrl: string = '';
    _mockyUrl: string = 'http://www.mocky.io/v2/57a9c6471100004313165aec';
    customers: ICustomer[];
    
    constructor(private http: Http) { }
    
    getCustomers() : Observable<ICustomer[]> {
        if (!this.customers) {
            return this.http.get(this._baseUrl + 'customers.json')
                        .map((res: Response) => {
                            this.customers = res.json();
                            return this.customers;
                        })
                        .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.customers);
        }
    }
    
    updateCustomer(customer: ICustomer) : Observable<boolean> {
        return Observable.create((observer: Observer<boolean>) => {
            this.customers.forEach((cust: ICustomer, index: number) => {
               if (cust.type === customer.type) {
                 console.log("write logic");
               } 
            });
            observer.next(true);
            observer.complete();
        });
    }
    
        
    
    
    private createObservable(data: any) : Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }
    
        
    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
