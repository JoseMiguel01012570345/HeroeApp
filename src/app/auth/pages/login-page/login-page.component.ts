import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  constructor( 
    private router : Router ,
    private authService: AuthService ,
  ){

  }

  login():void{
    
    this.authService.login('jhosef','123').subscribe(
      user => {

      }
    )
    this.router.navigateByUrl('/heroes/list')

  }


}
