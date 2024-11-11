import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {


  constructor( 
    private router:Router ,
  ){}

  sing_in():void{

    this.router.navigateByUrl('heroes/list')

  }

}
