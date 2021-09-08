import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LegalMovementsAccessService } from '../legal-movements-access.service';

@Component({
  selector: 'app-legal-movement-details',
  templateUrl: './legal-movement-details.component.html',
  styleUrls: ['./legal-movement-details.component.scss']
})
export class LegalMovementDetailsComponent implements OnInit {

  Object = Object;
  public legalMovement: any;

  constructor(private route: ActivatedRoute, private legalMovementsAccessService : LegalMovementsAccessService) { }

  ngOnInit(): void {
    // Obtener el idMov del movimiento actual
    this.route.paramMap.subscribe(params => {
      let idMov = params.get('idMov');

      // Obtener todos los registros de la base de datos de movimientos
      this.legalMovementsAccessService.getLegalMovements().subscribe((legalMovements) => {
        legalMovements.data.filter((i:any) => {
          // Filtrar los movimientos cuyo idMov se corresponda con el idMov del movimiento actual
          if(i.idMov == idMov) {
            this.legalMovement = i;
            console.log(i);
          }
        });
        
      })
    });
  }
}
