import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  data: any;
  editForm: FormGroup;
  disabled = true;
  status: boolean;
  grouping: any[] = [];
  constructor(
    private actRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private message: MessageService,
  ) { }

  ngOnInit() {
    this.grouping = JSON.parse(localStorage.getItem('dataGroupList'));
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const intRegex = /^\d+$/;
    this.data = this.actRoute.snapshot.params;
    this.editForm = this.fb.group({
      username: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      status: new FormControl(false, Validators.required),
      birthdate: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(emailRegex)])),
      gender: new FormControl('', Validators.required),
      group: new FormControl('', Validators.required),
      basicSalary: new FormControl(0, Validators.compose([Validators.required, Validators.pattern(intRegex)])),
      description: new FormControl('', Validators.required),
    })

    let i = this.data['group'];
    let y = { label: i, value: i };
    this.grouping.push(y);

    if (this.data.status === 'false') {
      this.status = false;
    } else {
      this.status = true;
    }

    this.editForm.patchValue(this.data);
  }

  dirtyTouched(form, field_name) {
    return form.get(field_name).invalid && (form.get(field_name).dirty || form.get(field_name).touched)
  }

  back() {
    this.router.navigate(['/detail-employee', this.data]);
  }

  edit() {
    let employeeList = JSON.parse(localStorage.getItem('dataDummy'));
    employeeList.map(item => {
      if (item.id === +this.data.id) {
        item.username = this.editForm.value.username;
        item.first_name = this.editForm.value.first_name;
        item.last_name = this.editForm.value.last_name;
        item.birthdate = this.editForm.value.birthdate;
        item.email = this.editForm.value.email;
        item.gender = this.editForm.value.gender;
        item.group = this.editForm.value.group;
        item.status = this.status;
        item.basicSalary = +this.editForm.value.basicSalary;
        item.description = this.editForm.value.description;
      }
    });
    localStorage.setItem('dataDummy', JSON.stringify(employeeList));
    this.message.setMessage('success', 'Data Successfuly Updated!', 'Success');
    this.router.navigateByUrl('/list-employee');
  }
}
