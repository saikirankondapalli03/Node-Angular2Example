import { provideRouter, RouterConfig } from '@angular/router';

import { CustomersRoutes } from './customers/customers.routes';


export const APP_ROUTES: RouterConfig = [
  ...CustomersRoutes,
    { path: '**', pathMatch:'full', redirectTo: '/customers' } //catch any unfound routes and redirect to home page
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(APP_ROUTES)
];
