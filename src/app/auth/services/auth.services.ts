import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interfaces';
import { catchError, map, Observable, of, tap } from 'rxjs';


@Injectable({providedIn: 'root'})
export class AuthService {
    
    private baseUrl = environments.baseUrl
    private user?: User

    constructor(private http: HttpClient) { }

    get currentUser():User|undefined{
        
        if (!this.user)
            return undefined

        return structuredClone( this.user )
        
    }

    private isAuthenticated = false

    login( ):void{

        this.isAuthenticated = true
        this.checkAuthtentication()
        console.log(this.isAuthenticated)
        
        // return this.http.get<User>(`${this.baseUrl}/user/1`)
        //     .pipe(
        //         tap( user => {
        //             this.user = user
        //         }),
        //         tap( user => localStorage.setItem('token' , user.id.toString() ) ),
        //     )
        }

    checkAuthtentication(): Observable<boolean>{
        return of(this.isAuthenticated)

    }
    
    activateLoginComponent(): Observable<boolean>{
        
        return of(true)
        
        if(  !localStorage.getItem('token') ) // check if token exit
            return of(false)
        
        const token = localStorage.getItem('token');
        
        return this.http.get<User>(`${this.baseUrl}`) // if token exits return true
        .pipe(
                tap(user => this.user = user) ,
                map( user => !!user ),
                catchError( err => of(false) )
                )    
    }

    logout(){

        this.user = undefined
        this.isAuthenticated = false
        console.log(this.isAuthenticated)
        localStorage.clear()
    }
}