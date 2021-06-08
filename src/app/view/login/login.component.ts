import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value: boolean = false;

  loginForm: FormGroup;



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cookie: CookieService,
    private message: MessageService,
    private authService: AuthService,
  ) {

  }

  ngOnInit() {
    if (this.cookie.check('ACCESS_TOKEN')) {
      if (this.authService.isLoggedIn()) {
        this.router.navigate(['/list-employee']);
        document.getElementById('loading-progress').style.display = 'none';
      }
    }
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      'username': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'password': new FormControl('', Validators.required),
    });

  }

  dirtyTouched(form, field_name) {
    return form.get(field_name).invalid && (form.get(field_name).dirty || form.get(field_name).touched)
  }

  login() {
    if (this.loginForm.value.username === 'agengpribadi' && this.loginForm.value.password === 'kanzia15') {
      this.cookie.set('ACCESS_TOKEN', 'kanziapribadi12', undefined, '/', undefined, false, "Lax");
      this.message.setMessage('success', 'Login Success!', 'Success');
      this.router.navigateByUrl('/list-employee');
    } else {
      this.message.setMessage('danger', 'Username/Password does not match!', 'Info');
    }

  }

  change() {
    let password = document.querySelector("input[id='password']");
    if (password['type'] === 'password') {
      console.log('1')
      password['type'] = 'text';
    } else {
      console.log('2')
      password['type'] = 'password';
    }
  }


}
