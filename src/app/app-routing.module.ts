import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalMovementsListComponent } from './legal-movements-list/legal-movements-list.component';
import { LegalMovementDetailsComponent } from './legal-movement-details/legal-movement-details.component';

const routes: Routes = [
  { path: 'legalMovementsList', component: LegalMovementsListComponent},
  { path: 'legalMovementDetails/:idMov', component: LegalMovementDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
