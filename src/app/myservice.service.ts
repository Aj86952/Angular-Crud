import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  data: any;

  constructor() {
    this.data = {
      User: [
        {
          name: 'Akshay',
          city: 'Nagpur',
          email: 'akshay@gmail.com',
        },
        {
          name: 'Paras',
          city: 'Pune',
          email: 'paras@gmail.com',
        },
      ],
    };
  }
}
