import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestModel } from '@data/services/api/models/request.model';
import { RequestsService } from '@data/services/requests.service';

@Injectable({
  providedIn: 'root',
})
export class GetAllRequestsUseCase {
  constructor(private requestsService: RequestsService) {}

  execute(): Observable<RequestModel[]> {
    return this.requestsService.getAllRequests();
  }
}
