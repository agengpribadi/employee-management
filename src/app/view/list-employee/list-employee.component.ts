import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
  providers: [ConfirmationService]
})
export class ListEmployeeComponent implements OnInit {
  pagePerOptions = [10, 20, 25];
  listForm: any = [];
  searchFilterColumn: any;

  searchEmployee = new FormControl();
  cols = [
    { field: 'username', header: 'Username', width: '20%', sortable: true },
    { field: 'email', header: 'Email', width: '20%', sortable: true },
    { field: 'gender', header: 'Status', width: '20%', sortable: true },
    { field: 'group', header: 'Group', width: '20%', sortable: true },
  ];
  constructor(
    private router: Router,
    private message: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
  ) {
    this.searchEmployee.valueChanges.subscribe(res => {
      let dataFilter;
      const initData = JSON.parse(localStorage.getItem('dataDummy'));

      dataFilter = initData.filter(data => {
        if ((data.first_name.toLowerCase().includes(res) || data.last_name.toLowerCase().includes(res) || data.email.toLowerCase().includes(res) && data.status == false)) {
          return true;
        }
      })
      this.listForm = dataFilter;
    })
  }

  ngOnInit() {
    this.getFilterColumn();
    this.listForm = JSON.parse(localStorage.getItem('dataDummy'));
  }

  register() {
    this.router.navigateByUrl('/add-employee');
  }

  delete(item, data) {
    this.confirmationService.confirm({
      message: `Do you want to delete this ${data.username}?`,
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        const toDelete = [item];
        for (var i = 0; i < this.listForm.length; i++) {
          var obj = this.listForm[i];

          if (toDelete.indexOf(obj.id) !== -1) {
            this.listForm.splice(i, 1);
            this.message.setMessage('danger', 'Data Successfuly Deleted!', 'Confirmed');
            localStorage.setItem('dataDummy', JSON.stringify(this.listForm));
          }
        }
        this.listForm = JSON.parse(localStorage.getItem('dataDummy'));
      },
      reject: () => {

      }
    });
  }

  detail(data) {
    this.router.navigate(['/detail-employee', data]);
  }

  getFilterColumn() {
    this.searchFilterColumn = this.cols.filter(a => a.sortable === true).map(b => b.field);
  }

  logout() {
    this.authService.logout();
  }

}
