import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface HealthResponse {
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  private apiUrl = 'https://ledgerly-back-run-440601685406.europe-southwest1.run.app/actuator/health';

  constructor(private http: HttpClient) {}

  getHealth(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(this.apiUrl);
  }
}
