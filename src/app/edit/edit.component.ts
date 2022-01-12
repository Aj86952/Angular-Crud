import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  myUser: any;
  index: any;
  constructor(
    private service: MyserviceService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => (this.index = params['i']));
  }

  ngOnInit(): void {
    this.myUser = {
      name: '',
      city: '',
      email: '',
    };
    this.myUser = this.service.data.User[this.index];
  }

  // onSubmit() { }
}
