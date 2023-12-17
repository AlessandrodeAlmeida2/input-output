import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rota1Component } from './components/pai/rota1/rota1.component';
import { Rota2Component } from './components/pai/rota2/rota2.component';
import { PaiComponent } from './components/pai/pai.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path: "rota1", component: Rota1Component},
  {path: "rota2", component: Rota2Component},
  {path: "pai", component: PaiComponent},
  {path: "form", component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
