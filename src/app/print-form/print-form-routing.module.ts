import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintFormComponent } from './components/print-form/print-form.component';


const routes: Routes = [
  {
    path: '',
    component: PrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintFormRoutingModule { }
