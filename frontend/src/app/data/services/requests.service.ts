import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, REQUESTS_ENDPOINT } from '@data/constants/constants';
import { RequestModel } from './api/models/request.model';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  private apiUrl = `${API_BASE_URL}${REQUESTS_ENDPOINT}`;

  constructor(private http: HttpClient) {}

  getAllRequests(): Observable<RequestModel[]> {
    return this.http.get<RequestModel[]>(this.apiUrl);
  }

  getRequestsByUserId(userId: number): Observable<RequestModel[]> {
    const url = `${this.apiUrl}?userId=${userId}`;
    return this.http.get<RequestModel[]>(url);
  }

  createRequest(requestData: RequestModel): Observable<RequestModel> {
    return this.http.post<RequestModel>(this.apiUrl, requestData);
  }

  editRequest(
    requestId: string,
    updatedRequestData: RequestModel,
  ): Observable<RequestModel> {
    const url = `${this.apiUrl}/${requestId}`;
    return this.http.patch<RequestModel>(url, updatedRequestData);
  }

  deleteRequest(requestId: string): Observable<RequestModel> {
    const url = `${this.apiUrl}/${requestId}`;
    return this.http.delete<RequestModel>(url);
  }
}
