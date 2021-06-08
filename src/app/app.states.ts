import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AddEmployeeComponent } from './view/add-employee/add-employee.component';
import { DetailEmployeeComponent } from './view/detail-employee/detail-employee.component';
import { EditEmployeeComponent } from './view/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './view/list-employee/list-employee.component';
import { LoginComponent } from './view/login/login.component';


export const appStates : Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', canActivate : [AuthGuard],
    children: [
      {
        path: 'list-employee',
        component: ListEmployeeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'add-employee',
        component: AddEmployeeComponent
      },
      {
        path: 'detail-employee',
        component: DetailEmployeeComponent
      },
      {
        path: 'edit-employee',
        component: EditEmployeeComponent
      }
    ]
  }
  
]
