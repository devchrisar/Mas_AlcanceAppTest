import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllRequestsUseCase } from '@app/data/services/api/usercases/list-Allrequests.usercase';
import { RequestModel } from '@app/data/services/api/models/request.model';
import { Subscription } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@Component({
  selector: 'app-request',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {
  requests: RequestModel[] = [];
  displayedColumns: string[] = ['date', 'method', 'endpoint', 'userId', 'responseData', 'requestData'];
  private requestsSubscription: Subscription | undefined;

  constructor(private getAllRequestsUseCase: GetAllRequestsUseCase) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    //? uso el use case para obtener los requests y me suscribo al observable que me devuelve el use case
    this.requestsSubscription = this.getAllRequestsUseCase.execute().subscribe({
      next: (data) => {
        this.requests = data;
      },
      error: (error) => {
        console.error('Error loading requests:', error);
      }
    });
  }

  //? metodo para obtener el color del texto en Mayus de la celda de la tabla segun el metodo http
  getColorForMethod(method: string): string {
    return `method-${method.toLowerCase()}`;
  }

    // Propiedades para paginación
    pageSizeOptions: number[] = [5, 10, 25, 50];
    pageSize: number = 10;
    pageIndex: number = 0;

      //? Método para manejar el cambio de página
  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  ngOnDestroy(): void {
    //? me desuscribo del observable para evitar memory leaks y errores en la consola al destruir el componente
    this.requestsSubscription?.unsubscribe();
  }
}
