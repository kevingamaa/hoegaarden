import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private apiKey = '$2y$10$kERcvm7YDgxjMUVAzcYHleg3VEBmhOOMvlsaOoafSdpL6/AGuovCy';
    private apiUrl = 'http://localhost:8000/api';
    constructor() { }
}
