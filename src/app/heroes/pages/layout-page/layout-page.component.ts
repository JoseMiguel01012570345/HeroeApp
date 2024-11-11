import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.services';
import { User } from 'src/app/auth/interfaces/user.interfaces';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  constructor(
    private router: Router ,
    private authService:AuthService
  ){

  }

  logout():void{

    this.authService.logout()
    this.router.navigateByUrl('auth')

  }

  get user():User | undefined{
    return this.authService.currentUSer
  }

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]

}
