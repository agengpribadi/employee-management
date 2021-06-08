import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private cookieService: CookieService,
    private authService: AuthService,
    private router: Router,
    private message : MessageService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.cookieService.check('ACCESS_TOKEN')) {
      if (!this.authService.isLoggedIn()) {
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        this.router.navigate(['/login']);
        this.message.setMessage('warning','Wrong Cridential!','Info');
        return false
      } else {
        return true;
      }
    } else {
      // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      this.router.navigate(['/login']);
      this.message.setMessage('warning','Wrong Cridential!','Info');
      return false;
    }
  }
}
