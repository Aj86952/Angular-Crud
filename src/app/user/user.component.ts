import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userList: any = [];
  constructor(private service: MyserviceService, private router: Router) {}

  ngOnInit(): void {
    this.userList = this.service.data.User;
    console.log(this.userList);
  }

  onDelete(id: any) {
    this.service.data.User.splice(id, 1);
  }

  onEdit(i: any) {
    this.router.navigate(['/edit', { i: i }]);
  }
}
