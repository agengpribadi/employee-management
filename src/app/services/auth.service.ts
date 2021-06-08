import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) { }

  isLoggedIn(): boolean {
    document.getElementById('loading-progress').style.display = 'block';

    if (this.cookieService.check('ACCESS_TOKEN')) {
      document.getElementById('loading-progress').style.display = 'none';
      return true;
    } else {
      document.getElementById('loading-progress').style.display = 'none';
      return false;
    }
  }

  async logout() {
    document.getElementById('loading-progress').style.display = 'block';
        this.cookieService.deleteAll();
        this.cookieService.deleteAll('/', location.hostname);
        document.cookie = '';

        this.router.navigate(['login']);
        //location.reload();
        document.getElementById('loading-progress').style.display = 'none';


  }
}



