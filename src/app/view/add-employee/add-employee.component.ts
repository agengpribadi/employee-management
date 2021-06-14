import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addForm: FormGroup;
  grouping: any;
  dataLength = JSON.parse(localStorage.getItem('dataDummy'));

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private message: MessageService,
    private pipeDate: DatePipe
  ) { }

  ngOnInit() {
    this.grouping = JSON.parse(localStorage.getItem('dataGroupList'));
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const intRegex = /^\d+$/;

    this.addForm = this.fb.group({
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
  }

  dirtyTouched(form, field_name) {
    return form.get(field_name).invalid && (form.get(field_name).dirty || form.get(field_name).touched)
  }

  cancel() {
    this.router.navigateByUrl('/list-employee');
  }

  save() {
    let employeeList = JSON.parse(localStorage.getItem('dataDummy'));
    this.addForm.addControl('id', new FormControl(this.dataLength.length+1, Validators.required));
    employeeList.push(this.addForm.value);
    localStorage.setItem('dataDummy', JSON.stringify(employeeList));
    this.message.setMessage('success', 'Data Successfuly Added!', 'Success');
    this.router.navigateByUrl('/list-employee');
  }


}
