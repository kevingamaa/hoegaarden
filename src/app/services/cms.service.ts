import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CmsService {
    private apiKey = '$10$kERcvm7YDgxjMUVAzcYHleg3VEBmhOOMvlsaOoafSdpL6/AGuovCy';
    private apiUrl = 'http://cms.marketingmanager.com.br/api';
    private httpOptions = {
        headers: new HttpHeaders({
            Authorization: `Bearer $2y$10$IzlT0JaIrWBNmIeN/ToHduAQrsFttmpBRS0XIYGnPb6sv2940Zi1q`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
            domain: 'http://www.hoegaarden-greenhouse.com/',
            'cache-control': 'no-cache',
        })
    };
    constructor(private http: HttpClient) { }

    get(filter?, quantidade?, page?): Observable<any> {
        let url = `${this.apiUrl}/cases/listar?quantidade=${quantidade ? quantidade : 8}&page=${page ? page : 1}`;

        // tslint:disable-next-line: no-unused-expression
        filter ? url = `${url}&filter=${ JSON.stringify(filter) }` : '' ;
        // console.log(url);
        return this.http.get<any>(url, this.httpOptions)
        .pipe(
            retry(10)
        );
    }



    find(id): Observable<any> {
        return  this.http.get<any>(`${this.apiUrl}/cases/detalhes?id=[${id}]`, this.httpOptions)
            .pipe(
                retry(10)
            );
    }
}
