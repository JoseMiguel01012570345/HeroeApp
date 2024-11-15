import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, RouterStateSnapshot, UrlSegment, Router,  } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.services';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch , CanActivate {
    constructor( 
        private router: Router ,
        private authService: AuthService ,
        
     ) { }
    
    
    private checkAuthStatus(): Observable<boolean> {
        return this.authService.activateLoginComponent()
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
        return this.checkAuthStatus()
    }
    
    
    canMatch(route: Route, segments: UrlSegment[]): Observable<boolean> {
        
        return this.checkAuthStatus()
    }
    
}