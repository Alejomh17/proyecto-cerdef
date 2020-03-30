import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDataRoutingModule } from './user-data-routing.module';
import { UserDataComponent } from './components/user-data/user-data.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserDataComponent],
  imports: [
    CommonModule,
    UserDataRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class UserDataModule { }
