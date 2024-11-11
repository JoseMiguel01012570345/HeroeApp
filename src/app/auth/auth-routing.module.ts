import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // If you're using <input> inside <mat-form-field>
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule



// localhost:4200/auth/
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'new-account', component: RegisterPageComponent },
      { path: '**', redirectTo: 'login' },
    ]
  }
];




@NgModule({
  declarations:[ RegisterPageComponent  ],
  imports: [ RouterModule.forChild( routes ) ,
    MatFormFieldModule ,
    MatInputModule , 
    MatIconModule

   ],
  exports: [ RouterModule ],
})
export class AuthRoutingModule { }
