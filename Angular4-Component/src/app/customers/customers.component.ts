import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
//import { Observable } from 'rxjs/Observable';

import { DataService } from '../shared/services/data.service';
import { CustomersGridComponent } from './customersGrid.component';
import { ICustomer } from '../shared/interfaces';

@Component({ 
  moduleId: module.id,
  selector: 'customers', 
  templateUrl: 'customers.component.html',
  directives: [ ROUTER_DIRECTIVES, 
                CustomersGridComponent ]
})
export class CustomersComponent implements OnInit {

  title: string;
  filterText: string;
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.title = 'Customers';
    this.filterText = 'Filter Customers:';
    

    this.dataService.getCustomers()
        .subscribe((customers: ICustomer[]) => {
          this.customers = this.filteredCustomers = customers;
        });

  }
 
}


