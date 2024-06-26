import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Job } from '../shared/models/model-job';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private startDate = new Date('2024-06-15');
  private requiredKeywords = ['Desenvolvedor front end angular', 'angular'];
  private labelSearch = ['Desenvolvedor front end angular', 'angular', 'NGRX', 'Profissional desenvolvedor front-end'];

  constructor(private http: HttpClient) { }

  private findWordKeys(keywords: string[], targetString: string): boolean {
    return keywords.every(keyword => targetString.toLowerCase().includes(keyword.toLowerCase()));
  }

  getJobs(): Observable<any[]> {
    const requests = this.labelSearch.map(label => {
      const labelFormatted = encodeURIComponent(label);
      // const url = `https://portal.api.gupy.io/api/job?name=${labelFormatted}&offset=0&limit=10000`;

      const url = `/api/job?name=${labelFormatted}&offset=0&limit=10000`;

      return this.http.get<any>(url)
      // .pipe(
        // map(response => {
          // return response.data
          // return response.data.filter((resp: Job) => {
            // const publishedDate = new Date(resp.publishedDate);
            // return publishedDate > this.startDate && this.findWordKeys(this.requiredKeywords, resp.description);
          // });
        // })
      // );
      // return this.http.get<any>(url);
    });

    return this.concatObservables(requests);
  }

  private concatObservables(observables: Observable<any>[]): Observable<any[]> {
    return forkJoin(observables);
  }

  checkHealth(): Observable<any> {
    const url = '/api/health'; // Substitua pelo endpoint correto do seu backend que indica o health do servidor

    return this.http.get(url).pipe(
      catchError(error => {
        console.error('Error checking proxy health:', error);
        return throwError('Erro ao verificar o health do proxy.');
      })
    );
  }
}
