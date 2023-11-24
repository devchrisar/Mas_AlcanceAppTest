import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestModel } from '@data/services/api/models/request.model';
import { RequestsService } from '@data/services/requests.service';

@Injectable({
  providedIn: 'root',
})
export class GetRequestsByUserIdUseCase {
  constructor(private requestsService: RequestsService) {}

  execute(userId: number): Observable<RequestModel[]> {
    return this.requestsService.getRequestsByUserId(userId);
  }
}
