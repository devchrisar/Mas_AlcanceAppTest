import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestModel } from '@data/services/api/models/request.model';
import { RequestsService } from '@data/services/requests.service';

@Injectable({
  providedIn: 'root',
})
export class EditRequestUseCase {
  constructor(private requestsService: RequestsService) {}

  execute(
    requestId: string,
    updatedRequestData: RequestModel,
  ): Observable<RequestModel> {
    return this.requestsService.editRequest(requestId, updatedRequestData);
  }
}
