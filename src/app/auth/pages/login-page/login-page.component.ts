import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '../../services/auth.services';
import { Observable, of } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../interfaces/user.interfaces';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';

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
    private http : HttpClient ,
  ){

  }

  public credentials = new FormGroup({
    
    username: new FormControl<string>('') ,
    password: new FormControl<string>(''),
    
  })

  login():void{
    
    let username = this.credentials.value.username
    let password = this.credentials.value.password

    let query = {

      user: username ,
      password : password

    }
    this.authService.login()
    this.router.navigateByUrl('heroes')
  }
  
  


}
