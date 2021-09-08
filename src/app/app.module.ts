import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { LegalMovementsAccessService } from './legal-movements-access.service';
import { LegalMovementsComponent } from './legal-movements/legal-movements.component';
import { LegalMovementDetailsComponent } from './legal-movement-details/legal-movement-details.component';
import { LegalMovementsListComponent } from './legal-movements-list/legal-movements-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LegalMovementsComponent,
    LegalMovementDetailsComponent,
    LegalMovementsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [LegalMovementsAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
