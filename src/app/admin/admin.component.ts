import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  myUser: any = [];
  constructor(private service: MyserviceService) {}

  ngOnInit(): void {
    this.myUser = {
      name: '',
      city: '',
      email: '',
    };
  }

  onSubmit() {
    console.log('myUser', this.myUser);

    this.service.data.User.push(this.myUser);
  }
}
