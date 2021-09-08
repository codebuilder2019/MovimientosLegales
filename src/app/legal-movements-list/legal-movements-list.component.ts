import { Component, OnInit } from '@angular/core';
import { LegalMovementsAccessService } from '../legal-movements-access.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-movements-list',
  templateUrl: './legal-movements-list.component.html',
  styleUrls: ['./legal-movements-list.component.scss']
})
export class LegalMovementsListComponent implements OnInit {

  constructor(private legalMovementsAccessService : LegalMovementsAccessService, private router: Router) { }

  public originalLegalMovements: any[] = [];
  public legalMovements: any[] = [];
  public page = 1;
  public pageSize = 10;
  public order = "Asc";
  public filter = "";

  ngOnInit(): void {
    // Obtener todos los registros de los movimientos desde la base de datos
    this.legalMovementsAccessService.getLegalMovements().subscribe(legalMovements => {
      this.originalLegalMovements = legalMovements.data;
      this.legalMovements = legalMovements.data;
    });
  }

  filterByIdMov(): void {
    let filteredInfo: any[] = [];

    // Si no se filtra la informacion mostrar todos los registros
    if(this.filter == "") {
      this.legalMovements = this.originalLegalMovements;
    } else {
      // Si se filtra la informacion mostrar solo los registros que coincidan con el idMov
      // proporcionado para filtrar
      this.originalLegalMovements.filter(i => {
        if(i.idMov == this.filter) {
          filteredInfo.push(i);
        }
      });

      this.page = 1;
      this.legalMovements = filteredInfo;
    }
  }

  orderAscendent(): void {
    // Ordenar la informacion de los registros en funcion del estado de la variable orden
    if (this.order == "Asc"){
      this.legalMovements = this.legalMovements.slice().sort((a, b) => new Date(b.fechaCreacion).valueOf() - new Date(a.fechaCreacion).valueOf());
      this.order = "Desc";
    } else {
      this.legalMovements = this.legalMovements.slice().sort((a, b) => new Date(a.fechaCreacion).valueOf() - new Date(b.fechaCreacion).valueOf());
      this.order = "Asc";
    }
  }

  onSelect(legalMovement : any) {
    // Dirigirse a la vista de detalle seleccionada por el usuario
    this.router.navigate(['/legalMovementDetails', legalMovement.idMov]);
  }
}
