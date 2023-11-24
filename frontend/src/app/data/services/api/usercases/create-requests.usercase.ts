import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestModel } from '@data/services/api/models/request.model';
import { RequestsService } from '@data/services/requests.service';

@Injectable({
  providedIn: 'root',
})
export class CreateRequestUseCase {
  constructor(private requestsService: RequestsService) {}

  execute(requestData: RequestModel): Observable<RequestModel> {
    return this.requestsService.createRequest(requestData);
  }
}
