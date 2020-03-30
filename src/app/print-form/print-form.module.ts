import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintFormRoutingModule } from './print-form-routing.module';
import { PrintFormComponent } from './components/print-form/print-form.component';


@NgModule({
  declarations: [PrintFormComponent],
  imports: [
    CommonModule,
    PrintFormRoutingModule
  ]
})
export class PrintFormModule { }
