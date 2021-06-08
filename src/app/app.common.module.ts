import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import {CalendarModule} from 'primeng/calendar';
import { NgxCurrencyModule } from "ngx-currency";
import {RadioButtonModule} from 'primeng/radiobutton';
import { MessageModule } from 'primeng/message';
import {InputSwitchModule} from 'primeng/inputswitch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { LoginComponent } from './view/login/login.component';
import { AddEmployeeComponent } from './view/add-employee/add-employee.component';
import { ListEmployeeComponent } from './view/list-employee/list-employee.component';
import { DetailEmployeeComponent } from './view/detail-employee/detail-employee.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { MessagesComponent } from './view/messages/messages.component';
import { EditEmployeeComponent } from './view/edit-employee/edit-employee.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  imports: [
      CommonModule,
        RouterModule,
        ButtonModule,
        InputTextModule,
        AutoCompleteModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TableModule,
        MessagesModule,
        MessageModule,
       InputSwitchModule,
       ProgressSpinnerModule,
       PanelModule,
       CalendarModule,
       RadioButtonModule,
       NgxCurrencyModule,
       BrowserAnimationsModule,
       UiSwitchModule.forRoot({
        size: 'small',
        color: '#0069d9',
        switchColor: '#ffffff',
        defaultBgColor: '#e3e3e3',
        defaultBoColor: '#ffffff',
        checkedTextColor: "#ffffff",
        uncheckedTextColor: "black"
      }),
      DropdownModule,
      ConfirmDialogModule
  ],
  declarations: [
    AppComponent, 
    LoginComponent, AddEmployeeComponent, ListEmployeeComponent, DetailEmployeeComponent, MessagesComponent, EditEmployeeComponent
  ],
  bootstrap: [],
  providers: [CookieService,DatePipe],
})

export class AppCommonModule {}
