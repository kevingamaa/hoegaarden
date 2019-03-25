import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
    private apiKey = '$2y$10$kERcvm7YDgxjMUVAzcYHleg3VEBmhOOMvlsaOoafSdpL6/AGuovCy';
    private apiUrl = 'http://localhost:8000/api';

    constructor(private http: HttpClient) {}

    public get(): Observable<any> {
        return this.http.get<any>(this.apiUrl + '/cases');
    }
}
