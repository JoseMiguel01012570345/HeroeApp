import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch , CanActivate {
    constructor() { }
    
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean  | boolean  {
        return true
    }
    
    
    canMatch(route: Route, segments: UrlSegment[]): Observable<boolean | boolean {
        
        return true
    }
    
}