import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ToastModule } from '../toast/toast.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  exports: [
    LoginComponent
  ],
  entryComponents: [
    LoginComponent
  ]
})
export class LoginModule { }
