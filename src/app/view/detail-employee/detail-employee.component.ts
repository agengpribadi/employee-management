import { DatePipe } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {
  data: any;
  detailForm: FormGroup;
  disabled = true;
  status: boolean;
  grouping: any[] = [];
  constructor(
    private actRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.data = this.actRoute.snapshot.params;
    this.detailForm = this.fb.group({
      username: new FormControl({ value: '', disabled: this.disabled }),
      first_name: new FormControl({ value: '', disabled: this.disabled }),
      last_name: new FormControl({ value: '', disabled: this.disabled }),
      status: new FormControl({ value: false, disabled: this.disabled }),
      birthdate: new FormControl({ value: '', disabled: this.disabled }),
      email: new FormControl({ value: '', disabled: this.disabled }),
      gender: new FormControl({ value: '', disabled: this.disabled }),
      group: new FormControl({ value: '', disabled: this.disabled }),
      basicSalary: new FormControl({ value: '', disabled: this.disabled }),
      description: new FormControl({ value: '', disabled: this.disabled }),
    })

    let i = this.data['group'];
    let y = { label: i, value: i };
    this.grouping.push(y);

    if (this.data.status === 'false') {
      this.status = false;
    } else {
      this.status = true;
    }

    this.detailForm.patchValue(this.data);
  }

  back() {
    this.router.navigateByUrl('/list-employee');
  }

  edit() {
    this.router.navigate(['/edit-employee', this.data]);
  }
}
